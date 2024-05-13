import { StyleSheet, View, Text } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const SelectComponentes = ({
  valueVerbal,
  onPressVerbal,
  valueSomatico,
  onPressSomatico,
  valueMaterial,
  onPressMaterial,
}) => (
  <View>
    <Text style={styles.label}>Componentes</Text>
    <BouncyCheckbox
      value={valueVerbal}
      onPress={onPressVerbal}
      style={styles.checkbox}
    />
    <Text>V</Text>
    <BouncyCheckbox
      value={valueSomatico}
      onPress={onPressSomatico}
      style={styles.checkbox}
    />
    <Text>S</Text>
    <BouncyCheckbox
      value={valueMaterial}
      onPress={onPressMaterial}
      style={styles.checkbox}
    />
    <Text>M</Text>
  </View>
);

const styles = StyleSheet.create({
  input: {
    margin: 10,
    backgroundColor: "white",
    paddingHorizontal: 8,
    height: 50,
  },
});

export default SelectComponentes;
