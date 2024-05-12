import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as Random from "expo-random";

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
      <View style={styles.container}>
        <Text style={styles.heading}>Adicionar Ação</Text>
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
          <Picker.Item label="Selecione o custo da ação" value={null} />
          <Picker.Item label="1 Ação" value="1 Ação" />
          <Picker.Item label="1 Ação Bônus" value="1 Ação Bônus" />
          <Picker.Item label="1 Reação" value="1 Reação" />
          <Picker.Item label="Ação Livre" value="Ação Livre" />
          <Picker.Item label="Varia" value="Varia" />
        </Picker>
        <TextInput
          multiline
          numberOfLines={4}
          placeholder="Descrição (Suporta Markdown)"
          onChangeText={(value) => this.setState({ descricao: value })}
          style={styles.input}
          value={this.state.descricao}
        />
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add City</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: "#666",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  heading: {
    color: "white",
    fontSize: 40,
    marginBottom: 10,
    alignSelf: "center",
  },
  container: {
    backgroundColor: "#1976D2",
    flex: 1,
    justifyContent: "center",
  },
  input: {
    margin: 10,
    backgroundColor: "white",
    paddingHorizontal: 8,
    height: 50,
  },
});

export default AddAction;
