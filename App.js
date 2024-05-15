import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AddAction from "./src/AddAction";
import AddSpell from "./src/AddSpell";
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./src/styles";
import ActionsNavScreen from "./src/ActionsNavScreen";
import SpellsNavScreen from "./src/SpellsNavScreen";
import { AppState, View, Image } from "react-native";

const Tab = createMaterialBottomTabNavigator();
const iconSize = 25;

export default class App extends Component {
  state = {
    appState: AppState.currentState,
    isInBackground: false,
    actions: [
      {
        nome: "a",
        custo: "1 Ação Bônus",
        descricao: "a",
      },
    ],
    spells: [
      {
        nome: "Alarm",
        nivel: "1",
        escola: "Abjuração",
        tempo_de_conjuracao: {
          quantidade: 1,
          unidade: "Minutos",
        },
        componentes: {
          verbal: true,
          somatico: true,
          material: true,
          materialTipo: "a tiny bell and a piece of fine silver wire",
        },
        alcance: "30 feet",
        duracao: {
          tipo: "Temporária",
          concentracao: false,
          ate: false,
          quantidade: 8,
          unidade: "Horas",
        },
        descricao:
          "You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible.\n\nA mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping.\n\nAn audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.",
        id: "170,63,11,15,192,3,173,23",
      },
    ],
  };

  componentDidMount() {
    AppState.addEventListener("change", this.handleAppStateChange);
    setTimeout(() => {
      this.setState({ isInBackground: false });
    }, 1000);
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this.handleAppStateChange);
  }

  handleAppStateChange = (nextAppState) => {
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
    }
    this.setState({ appState: nextAppState });
  };

  addAction = (action) => {
    const actions = this.state.actions;
    actions.push(action);
    this.setState({ actions });
    console.log("estado do app.js: ", this.state);
  };

  addSpell = (spell) => {
    const spells = this.state.spells;
    spells.push(spell);
    this.setState({ spells });
    console.log("estado do app.js: ", this.state);
  };

  render() {
    const { isInBackground } = this.state;
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
              style={{ width: "50%", resizeMode: 'contain' }}
            />
          </View>
        )}
        {!isInBackground && (
          <NavigationContainer>
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
                name="Adicionar Ação"
                options={{
                  tabBarIcon: ({ color }) => (
                    <Icon name={"plus"} color={color} size={iconSize} />
                  ),
                }}
              >
                {() => <AddAction addAction={this.addAction} />}
              </Tab.Screen>
              <Tab.Screen
                name="Adicionar Magia"
                options={{
                  tabBarIcon: ({ color }) => (
                    <Icon name={"plus"} color={color} size={iconSize} />
                  ),
                }}
              >
                {() => <AddSpell addSpell={this.addSpell} />}
              </Tab.Screen>
            </Tab.Navigator>
          </NavigationContainer>
        )}
      </View>
    );
  }
}
