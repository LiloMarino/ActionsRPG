import React from "react";
import { View, Text, TouchableWithoutFeedback, ScrollView } from "react-native";
import styles from "./styles";

import CenterMessage from "./CenterMessage";

export default class Actions extends React.Component {
  navigate = (item) => {
    this.props.navigation.navigate("Action", { action: item });
  };

  render() {
    const { actions } = this.props;
    console.log("actions", this.props.cities);
    return (
      <ScrollView
        style={styles.background}
        contentContainerStyle={[!actions.length && { flex: 1 }]}
      >
        <View
          style={[!actions.length && { justifyContent: "center", flex: 1 }]}
        >
          {!actions.length && <CenterMessage message="Sem ações salvas!" />}
          {actions.map((item, index) => (
            <TouchableWithoutFeedback
              onPress={() => this.navigate(item)}
              key={index}
            >
              <View style={styles.listItem}>
                <Text style={styles.listItemText}>{item.nome}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </ScrollView>
    );
  }
}
