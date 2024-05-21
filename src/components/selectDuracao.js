import { TextInput, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from "../styles/styles";

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
  <View style={styles.subContainer}>
    <Text style={styles.section}>Duração</Text>
    <Picker
      selectedValue={valueTipo}
      style={styles.input}
      onValueChange={onValueChangeTipo}
    >
      <Picker.Item label="Selecione o tipo de duração" value="" />
      <Picker.Item label="Instantânea" value="Instantânea" />
      <Picker.Item label="Temporária" value="Temporária" />
      <Picker.Item label="Permanente" value="Permanente" />
    </Picker>
    {valueTipo === "Temporária" && (
      <View>
        <View style={styles.componentSelection}>
          <View style={styles.itemComponent}>
            <BouncyCheckbox
              value={valueConcentracao}
              onPress={onPressConcentracao}
              fillColor="#c62b29"
            />
            <Text onPressIn={onPressConcentracao} style={styles.label}>Concentração</Text>
          </View>
          <View style={styles.itemComponent}>
            <BouncyCheckbox
              value={valueAte}
              onPress={onPressAte}
              fillColor="#c62b29"
            />
            <Text onPressIn={onPressAte} style={styles.label}>Até</Text>
          </View>
        </View>
        <View style={styles.numberSelection}>
          <TextInput
            keyboardType="numeric"
            defaultValue="0"
            onChangeText={(text) => onChangeTextQtd(parseInt(text))}
            style={[styles.input, styles.itemSelection]}
            value={valueQtd.toString()}
          />
          <Picker
            selectedValue={valueUnidade}
            style={[styles.input, styles.itemSelection]}
            onValueChange={onValueChangeUnidade}
          >
            <Picker.Item label="Selecione a unidade de tempo" value="" />
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
      </View>
    )}
  </View>
);

export default SelectDuracao;
