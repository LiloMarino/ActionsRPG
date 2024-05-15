import React from "react";
import { View, Text, TouchableWithoutFeedback, ScrollView } from "react-native";
import styles from "./styles";

import CenterMessage from "./CenterMessage";

export default class Spells extends React.Component {
  navigate = (item) => {
    this.props.navigation.navigate("Spell", { spell: item });
  };

  render() {
    const { spells } = this.props;
    console.log("spells", this.props.spells);
    return (
      <ScrollView
        style={styles.background}
        contentContainerStyle={[!spells.length && { flex: 1 }]}
      >
        <View style={[!spells.length && { justifyContent: "center", flex: 1 }]}>
          {!spells.length && <CenterMessage message="Sem magias salvas!" />}
          {spells.map((item, index) => (
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
