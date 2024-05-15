import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as Random from "expo-random";
import styles from "./styles";

class AddAction extends React.Component {
  state = {
    nome: "",
    custo: "",
    descricao: "",
  };

  submit = () => {
    if (
      this.state.nome === "" ||
      this.state.custo === "" ||
      this.state.descricao === ""
    ) {
      alert("Preencha todos os campos");
    } else {
      const action = {
        nome: this.state.nome,
        custo: this.state.custo,
        descricao: this.state.descricao,
        id: String(Random.getRandomBytes(8)),
      };
      this.props.addAction(action);
      this.setState({
        nome: "",
        custo: "",
        descricao: "",
      });
    }
  };

  render() {
    return (
      <ScrollView style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.heading}>Adicionar Ação</Text>
          <View style={styles.subContainer}>
            <Text style={styles.section}>Informações Básicas</Text>
            <TextInput
              placeholder="Nome da Ação"
              onChangeText={(value) => this.setState({ nome: value })}
              style={styles.input}
              value={this.state.nome}
            />
            <Picker
              selectedValue={this.state.custo}
              style={styles.input}
              onValueChange={(value) => this.setState({ custo: value })}
            >
              <Picker.Item label="Selecione o custo da ação" value="" />
              <Picker.Item label="1 Ação" value="1 Ação" />
              <Picker.Item label="1 Ação Bônus" value="1 Ação Bônus" />
              <Picker.Item label="1 Reação" value="1 Reação" />
              <Picker.Item label="Ação Livre" value="Ação Livre" />
              <Picker.Item label="Varia" value="Varia" />
            </Picker>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.section}>Descrição</Text>
            <TextInput
              multiline
              numberOfLines={4}
              placeholder="Descrição (Suporta Markdown)"
              onChangeText={(value) => this.setState({ descricao: value })}
              style={styles.inputDesc}
              value={this.state.descricao}
            />
          </View>
          <TouchableOpacity onPress={this.submit}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Adicionar Ação</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default AddAction;
