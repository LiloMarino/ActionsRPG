import { TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from "../styles";

const SelectDuracao = ({
  valueTipo,
  onValueChangeTipo,
  valueConcentracao,
  onPressConcentracao,
  valueAte,
  onPressAte,
  valueQtd,
  onChangeTextQtd,
  valueUnidade,
  onValueChangeUnidade,
}) => (
  <View>
    <Picker
      selectedValue={valueTipo}
      style={styles.input}
      onValueChange={onValueChangeTipo}
    >
      <Picker.Item label="Selecione o tipo de duração" value={null} />
      <Picker.Item label="Instantânea" value="Instantânea" />
      <Picker.Item label="Temporária" value="Temporária" />
      <Picker.Item label="Permanente" value="Permanente" />
    </Picker>
    <BouncyCheckbox
      value={valueConcentracao}
      onPress={onPressConcentracao}
      style={styles.checkbox}
    />
    <BouncyCheckbox
      value={valueAte}
      onPress={onPressAte}
      style={styles.checkbox}
    />
    <TextInput
      keyboardType="numeric"
      onChangeText={onChangeTextQtd}
      style={styles.input}
      value={valueQtd}
    />
    <Picker
      selectedValue={valueUnidade}
      style={styles.input}
      onValueChange={onValueChangeUnidade}
    >
      <Picker.Item label="Selecione a unidade de tempo" value={null} />
      <Picker.Item label="Turnos" value="Turnos" />
      <Picker.Item label="Rodadas" value="Rodadas" />
      <Picker.Item label="Minutos" value="Minutos" />
      <Picker.Item label="Horas" value="Horas" />
      <Picker.Item label="Dias" value="Dias" />
      <Picker.Item label="Semanas" value="Semanas" />
      <Picker.Item label="Meses" value="Meses" />
      <Picker.Item label="Anos" value="Anos" />
    </Picker>
  </View>
);

export default SelectDuracao;
