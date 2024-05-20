import React from "react";
import { Text, View } from "react-native";
import styles from "./styles/styles";

const CenterMessage = ({ message }) => (
  <View>
    <Text style={styles.message}>{message}</Text>
  </View>
);

export default CenterMessage;
