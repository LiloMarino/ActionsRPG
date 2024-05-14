import { Picker } from "@react-native-picker/picker";
import styles from "../styles";

const SelectNivel = ({ selectedValue, onValueChange }) => (
  <Picker
    selectedValue={selectedValue}
    style={styles.input}
    onValueChange={onValueChange}
  >
    <Picker.Item label="Selecione o nível da magia" value={null} />
    <Picker.Item label="Cantrip" value="0" />
    <Picker.Item label="1st" value="1" />
    <Picker.Item label="2nd" value="2" />
    <Picker.Item label="3rd" value="3" />
    <Picker.Item label="4th" value="4" />
    <Picker.Item label="5th" value="5" />
    <Picker.Item label="6th" value="6" />
    <Picker.Item label="7th" value="7" />
    <Picker.Item label="8th" value="8" />
    <Picker.Item label="9th" value="9" />
    <Picker.Item label="10th" value="10" />
    <Picker.Item label="11th" value="11" />
    <Picker.Item label="12th" value="12" />
    <Picker.Item label="13th" value="13" />
    <Picker.Item label="14th" value="14" />
    <Picker.Item label="15th" value="15" />
    <Picker.Item label="16th" value="16" />
    <Picker.Item label="17th" value="17" />
    <Picker.Item label="18th" value="18" />
    <Picker.Item label="19th" value="19" />
    <Picker.Item label="20th" value="20" />
  </Picker>
);

export default SelectNivel;
