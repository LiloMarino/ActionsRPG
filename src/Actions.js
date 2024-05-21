import React from "react";
import { View, Text, TouchableWithoutFeedback, ScrollView } from "react-native";
import styles from "./styles/styles";

import CenterMessage from "./CenterMessage";

export default class Actions extends React.Component {
  navigate = (item) => {
    this.props.navigation.navigate("Action", { action: item });
  };

  render() {
    const { actions } = this.props;
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
                <Text style={styles.listItemMiniText}>{item.custo}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </ScrollView>
    );
  }
}
