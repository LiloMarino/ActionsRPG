import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./src/styles/styles";
import ActionsNavScreen from "./src/ActionsNavScreen";
import SpellsNavScreen from "./src/SpellsNavScreen";
import { AppState, View, Image, Alert } from "react-native";
import * as Font from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OptionsStackScreen from "./src/OptionsNavScreen";

const Tab = createMaterialBottomTabNavigator();
const iconSize = 25;

export default class App extends Component {
  state = {
    appState: AppState.currentState,
    isInBackground: false,
    actions: [],
    spells: [],
    navigationState: null,
  };

  async loadFonts() {
    await Font.loadAsync({
      Arial: require("./assets/fonts/Arial.ttf"),
      "Times New Roman": require("./assets/fonts/Times-New-Roman.ttf"),
    });
  }

  async componentDidMount() {
    AppState.addEventListener("change", this.handleAppStateChange);
    this.loadFonts();
    try {
      const actionsFromStorage = await AsyncStorage.getItem("actions");
      const spellsFromStorage = await AsyncStorage.getItem("spells");
      if (actionsFromStorage)
        this.setState({ actions: JSON.parse(actionsFromStorage) });
      if (spellsFromStorage)
        this.setState({ spells: JSON.parse(spellsFromStorage) });
    } catch (error) {
      console.error("Erro ao carregar os dados", error);
    }
    setTimeout(() => {
      this.setState({ isInBackground: false });
    }, 1000);
  }

  handleAppStateChange = async (nextAppState) => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      // O aplicativo retornou do plano de fundo
      setTimeout(() => {
        this.setState({ isInBackground: false });
      }, 1000);
    } else {
      // O aplicativo está indo para o plano de fundo
      this.setState({ isInBackground: true });
      await this.saveData();
    }
    this.setState({ appState: nextAppState });
  };

  saveData = async () => {
    try {
      await AsyncStorage.setItem("actions", JSON.stringify(this.state.actions));
      await AsyncStorage.setItem("spells", JSON.stringify(this.state.spells));
    } catch (error) {
      console.error("Erro ao salvar os dados", error);
    }
  };

  resetData = async () => {
    console.log(this.state);
    this.setState({ actions: [], spells: [] });
    await this.saveData();
    alert("Dados resetados com sucesso!")
  };

  addAction = async (action) => {
    const actions = this.state.actions;
    actions.push(action);
    this.setState({ actions });
    await this.saveData();
  };

  addSpell = async (spell) => {
    const spells = this.state.spells;
    spells.push(spell);
    this.setState({ spells });
    await this.saveData();
  };

  render() {
    const { isInBackground, navigationState } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {isInBackground && (
          <View
            style={{
              backgroundColor: "#000",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("./assets/DnD-Logo.png")}
              style={{ width: "50%", resizeMode: "contain" }}
            />
          </View>
        )}
        {!isInBackground && (
          <NavigationContainer
            initialState={navigationState}
            onStateChange={(state) => this.setState({ navigationState: state })}
          >
            <Tab.Navigator
              barStyle={styles.bar}
              inactiveColor="white"
              activeColor="white"
              activeIndicatorStyle={styles.background}
            >
              <Tab.Screen
                name="Ações"
                options={{
                  tabBarIcon: ({ color }) => (
                    <Icon name={"running"} color={color} size={iconSize} />
                  ),
                }}
              >
                {(props) => (
                  <ActionsNavScreen {...props} actions={this.state.actions} />
                )}
              </Tab.Screen>
              <Tab.Screen
                name="Magias"
                options={{
                  tabBarIcon: ({ color }) => (
                    <Icon name={"magic"} color={color} size={iconSize} />
                  ),
                }}
              >
                {(props) => (
                  <SpellsNavScreen {...props} spells={this.state.spells} />
                )}
              </Tab.Screen>
              <Tab.Screen
                name="Opções"
                options={{
                  tabBarIcon: ({ color }) => (
                    <Icon name={"list"} color={color} size={iconSize} />
                  ),
                }}
              >
                {() => (
                  <OptionsStackScreen
                    addSpell={this.addSpell}
                    addAction={this.addAction}
                    resetData={this.resetData}
                  />
                )}
              </Tab.Screen>
            </Tab.Navigator>
          </NavigationContainer>
        )}
      </View>
    );
  }
}
