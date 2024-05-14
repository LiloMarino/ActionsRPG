import { View, Text } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from "../styles";

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

export default SelectComponentes;
