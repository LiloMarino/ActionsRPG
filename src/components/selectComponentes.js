import { View, Text, TextInput } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from "../styles/styles";

const SelectComponentes = ({
  valueVerbal,
  onPressVerbal,
  valueSomatico,
  onPressSomatico,
  valueMaterial,
  onPressMaterial,
  descMaterial,
  onChangeTextMaterial,
}) => (
  <View style={styles.subContainer}>
    <Text style={styles.section}>Componentes</Text>
    <View style={styles.componentSelection}>
      <View style={styles.itemComponent}>
        <BouncyCheckbox
          value={valueVerbal}
          onPress={onPressVerbal}
          fillColor="#c62b29"
        />
        <Text style={styles.label}>V</Text>
      </View>
      <View style={styles.itemComponent}>
        <BouncyCheckbox
          value={valueSomatico}
          onPress={onPressSomatico}
          fillColor="#c62b29"
        />
        <Text style={styles.label}>S</Text>
      </View>
      <View style={styles.itemComponent}>
        <BouncyCheckbox
          value={valueMaterial}
          onPress={onPressMaterial}
          fillColor="#c62b29"
        />
        <Text style={styles.label}>M</Text>
      </View>
    </View>
    {valueMaterial && (
      <TextInput
        placeholder="Material"
        onChangeText={onChangeTextMaterial}
        style={[styles.input, {marginTop: 10}]}
        value={descMaterial}
      />
    )}
  </View>
);

export default SelectComponentes;
