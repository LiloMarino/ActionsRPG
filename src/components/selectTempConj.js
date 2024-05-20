import { View, Text, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "../styles/styles";

const SelectTempConj = ({
  valueQtd,
  valueUnidade,
  onValueChange,
  onChangeText,
}) => (
  <View style={styles.subContainer}>
    <Text style={styles.section}>Tempo de Conjuração</Text>
    <View style={styles.numberSelection}>
      <TextInput
        keyboardType="numeric"
        defaultValue="0"
        onChangeText={(text) => onChangeText(parseInt(text))}
        style={[styles.input, styles.itemSelection, {height: 55}]}
        value={valueQtd.toString()}
      />
      <Picker
        selectedValue={valueUnidade}
        style={[styles.input, styles.itemSelection]}
        onValueChange={onValueChange}
      >
        <Picker.Item label="Selecione o custo" value="" />
        <Picker.Item label="Ação" value="Ação" />
        <Picker.Item label="Ação Bônus" value="Ação Bônus" />
        <Picker.Item label="Reação" value="Reação" />
        <Picker.Item label="Rodadas" value="Rodadas" />
        <Picker.Item label="Minutos" value="Minutos" />
        <Picker.Item label="Horas" value="Horas" />
        <Picker.Item label="Especial" value="Especial" />
      </Picker>
    </View>
  </View>
);

export default SelectTempConj;
