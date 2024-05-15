import "react-native-gesture-handler";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AddAction from "./src/AddAction";
import AddSpell from "./src/AddSpell";
import Icon from "react-native-vector-icons/FontAwesome5";
import CenterMessage from "./src/CenterMessage";
import styles from "./src/styles";
import ActionsNavScreen from "./src/ActionsNavScreen";
import SpellsNavScreen from "./src/SpellsNavScreen";

const Tab = createMaterialBottomTabNavigator();
const iconSize = 25;

export default class App extends Component {
  state = {
    actions: [
      {
        nome: "a",
        custo: "1 Ação Bônus",
        descricao: "a",
      },
    ],
    spells: [
      {
        nome: "d",
        nivel: "1",
        escola: "Conjuração",
        tempo_de_conjuracao: {
          quantidade: 1,
          unidade: "Ação Bônus",
        },
        componentes: {
          verbal: false,
          somatico: false,
          material: true,
          materialTipo: "d",
        },
        alcance: "a",
        duracao: {
          tipo: "Temporária",
          concentracao: true,
          ate: true,
          quantidade: 1,
          unidade: "Turnos",
        },
        descricao: "a",
        id: "62,93,67,163,24,84,127,250",
      },
    ],
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
    return (
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
    );
  }
}
