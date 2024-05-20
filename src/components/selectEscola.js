import { Picker } from "@react-native-picker/picker";
import styles from "../styles/styles";

const SelectEscola = ({ selectedValue, onValueChange }) => (
  <Picker
    selectedValue={selectedValue}
    style={styles.input}
    onValueChange={onValueChange}
  >
    <Picker.Item label="Selecione a escola da magia" value="" />
    <Picker.Item label="Abjuração" value="Abjuração" />
    <Picker.Item label="Conjuração" value="Conjuração" />
    <Picker.Item label="Adivinhação" value="Adivinhação" />
    <Picker.Item label="Encantamento" value="Encantamento" />
    <Picker.Item label="Evocação" value="Evocação" />
    <Picker.Item label="Ilusão" value="Ilusão" />
    <Picker.Item label="Necromancia" value="Necromancia" />
    <Picker.Item label="Psiônico" value="Psiônico" />
    <Picker.Item label="Transmutação" value="Transmutação" />
  </Picker>
);

export default SelectEscola;
