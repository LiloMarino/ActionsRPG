import { StyleSheet, View, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

const SelectTempConj = ({ valueQtd, valueUnidade, onValueChange, onChangeText }) => (
  <View>
    <TextInput
      keyboardType="numeric"
      onChangeText={onChangeText}
      style={styles.input}
      value={valueQtd}
    />
    <Picker
      selectedValue={valueUnidade}
      style={styles.input}
      onValueChange={onValueChange}
    >
      <Picker.Item label="Selecione o custo" value={null} />
      <Picker.Item label="Ação" value="Ação" />
      <Picker.Item label="Ação Bônus" value="Ação Bônus" />
      <Picker.Item label="Reação" value="Reação" />
      <Picker.Item label="Rodadas" value="Rodadas" />
      <Picker.Item label="Minutos" value="Minutos" />
      <Picker.Item label="Horas" value="Horas" />
      <Picker.Item label="Especial" value="Especial" />
    </Picker>
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

export default SelectTempConj;
