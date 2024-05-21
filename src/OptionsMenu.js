import React from "react";
import { View, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles/styles";
import { TouchableHighlight } from "react-native-gesture-handler";

const OptionsMenu = (props) => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.background}>
      <TouchableHighlight onPress={() => navigation.navigate("Add Action")}>
        <View style={styles.listOptions}>
          <Text style={styles.listItemText}>Adicionar Ação</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate("Add Spell")}>
        <View style={styles.listOptions}>
          <Text style={styles.listItemText}>Adicionar Magia</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => props.resetData()}>
        <View style={styles.listOptions}>
          <Text style={styles.listItemText}>Resetar</Text>
        </View>
      </TouchableHighlight>
    </ScrollView>
  );
};

export default OptionsMenu;
