import { View, Text, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "../styles";

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
        onChangeText={onChangeText}
        style={[styles.input, styles.itemSelection]}
        value={valueQtd}
      />
      <Picker
        selectedValue={valueUnidade}
        style={[styles.input, styles.itemSelection]}
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
  </View>
);

export default SelectTempConj;
