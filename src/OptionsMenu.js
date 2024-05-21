import React from "react";
import { View, Button, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles/styles";
import { TouchableHighlight } from "react-native-gesture-handler";

const OptionsMenu = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.background}>
      <TouchableHighlight onPress={() => navigation.navigate("Add Action")}>
        <View style={styles.listItem2}>
          <Text style={styles.listItemText}>Adicionar Ação</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate("Add Spell")}>
        <View style={styles.listItem2}>
          <Text style={styles.listItemText}>Adicionar Magia</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight>
        <View style={styles.listItem2}>
          <Text style={styles.listItemText}>Resetar</Text>
        </View>
      </TouchableHighlight>
    </ScrollView>
  );
};

export default OptionsMenu;
