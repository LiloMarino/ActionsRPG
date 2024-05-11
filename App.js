import "react-native-gesture-handler";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AddAction from "./src/AddAction";
import AddSpell from "./src/AddSpell";
import Icon from "react-native-vector-icons/FontAwesome5";

const Tab = createMaterialBottomTabNavigator();
const iconSize = 25;

export default class App extends Component {
  state = {
    actions: [],
    spells: [],
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
        <Tab.Navigator>
          <Tab.Screen
            name="Ações"
            component={AddAction}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name={"running"} color={color} size={iconSize} />
              ),
            }}
          />
          <Tab.Screen
            name="Magias"
            component={AddAction}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name={"magic"} color={color} size={iconSize} />
              ),
            }}
          />
          <Tab.Screen
            name="Adicionar Ação"
            component={AddAction}
            initialParams={{ addAction: this.addAction }}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name={"plus"} color={color} size={iconSize} />
              ),
            }}
          />
          <Tab.Screen
            name="Adicionar Magia"
            component={AddSpell}
            initialParams={{ addSpell: this.addSpell }}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name={"plus"} color={color} size={iconSize} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
