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
import { colors } from "./theme";

import SelectNivel from "./components/selectNivel";
import SelectEscola from "./components/selectEscola";
import SelectDuracao from "./components/selectDuracao";
import SelectTempConj from "./components/selectTempConj";
import SelectComponentes from "./components/selectComponentes";

class AddSpell extends React.Component {
  state = {
    nome: "",
    nivel: null,
    escola: null,
    tempo_de_conjuracao: { quantidade: 0, unidade: null },
    componentes: { verbal: false, somatico: false, material: false },
    alcance: "",
    duracao: {
      tipo: null,
      concentracao: false,
      ate: false,
      quantidade: 0,
      unidade: null,
    },
    descricao: "",
  };

  submit = () => {
    if (
      this.state.nome === "" ||
      this.state.nivel === null ||
      this.state.escola === null ||
      this.state.tempo_de_conjuracao.quantidade === 0 ||
      this.state.tempo_de_conjuracao.unidade === null ||
      this.state.alcance === "" ||
      this.state.duracao.tipo === null ||
      this.state.descricao === ""
    ) {
      alert("Preencha todos os campos");
    } else {
      const spell = {
        nome: this.state.nome,
        nivel: this.state.nivel,
        escola: this.state.escola,
        tempo_de_conjuracao: this.state.tempo_de_conjuracao,
        alcance: this.state.alcance,
        duracao: this.state.duracao,
        descricao: this.state.descricao,
        id: String(Random.getRandomBytes(8)),
      };
      this.props.addSpell(spell);
      this.setState({
        nome: "",
        nivel: null,
        escola: null,
        tempo_de_conjuracao: { quantidade: 0, unidade: null },
        componentes: { verbal: false, somatico: false, material: false },
        alcance: "",
        duracao: {
          tipo: null,
          concentracao: false,
          ate: false,
          quantidade: 0,
          unidade: null,
        },
        descricao: "",
      });
    }
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Magias</Text>
          <TextInput
            placeholder="Nome da Magia"
            onChangeText={(value) => this.setState({ nome: value })}
            style={styles.input}
            value={this.state.nome}
          />
          <SelectNivel
            onValueChange={(value) => this.setState({ nivel: value })}
            selectedValue={this.state.nivel}
          />
          <SelectEscola
            onValueChange={(value) => this.setState({ escola: value })}
            selectedValue={this.state.escola}
          />
          <SelectTempConj
            valueQtd={this.state.tempo_de_conjuracao.quantidade}
            valueUnidade={this.state.tempo_de_conjuracao.unidade}
            onValueChange={(value) =>
              this.setState((prevState) => ({
                tempo_de_conjuracao: {
                  ...prevState.tempo_de_conjuracao,
                  unidade: value,
                },
              }))
            }
            onChangeText={(value) =>
              this.setState((prevState) => ({
                tempo_de_conjuracao: {
                  ...prevState.tempo_de_conjuracao,
                  quantidade: value,
                },
              }))
            }
          />
          <TextInput
            placeholder="Alcance da magia"
            onChangeText={(value) => this.setState({ alcance: value })}
            style={styles.input}
            value={this.state.alcance}
          />
          <SelectComponentes
            valueVerbal={this.state.componentes.verbal}
            valueMaterial={this.state.componentes.material}
            valueSomatico={this.state.componentes.somatico}
            onPressVerbal={(value) =>
              this.setState((prevState) => ({
                componentes: {
                  ...prevState.componentes,
                  verbal: value,
                },
              }))
            }
            onPressSomatico={(value) =>
              this.setState((prevState) => ({
                componentes: {
                  ...prevState.componentes,
                  somatico: value,
                },
              }))
            }
            onPressMaterial={(value) =>
              this.setState((prevState) => ({
                componentes: {
                  ...prevState.componentes,
                  material: value,
                },
              }))
            }
          />
          <SelectDuracao
            onChangeTextQtd={(value) =>
              this.setState((prevState) => ({
                duracao: {
                  ...prevState.duracao,
                  quantidade: value,
                },
              }))
            }
            onPressAte={(value) =>
              this.setState((prevState) => ({
                duracao: {
                  ...prevState.duracao,
                  ate: value,
                },
              }))
            }
            onPressConcentracao={(value) =>
              this.setState((prevState) => ({
                duracao: {
                  ...prevState.duracao,
                  concentracao: value,
                },
              }))
            }
            onValueChangeTipo={(value) =>
              this.setState((prevState) => ({
                duracao: {
                  ...prevState.duracao,
                  tipo: value,
                },
              }))
            }
            onValueChangeUnidade={(value) =>
              this.setState((prevState) => ({
                duracao: {
                  ...prevState.duracao,
                  unidade: value,
                },
              }))
            }
            valueAte={this.state.duracao.ate}
            valueConcentracao={this.state.duracao.concentracao}
            valueQtd={this.state.duracao.quantidade}
            valueTipo={this.state.duracao.tipo}
            valueUnidade={this.state.duracao.unidade}
          />
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
              <Text style={styles.buttonText}>Adicionar Magia</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    margin: 8,
    color: "white",
  },
  checkbox: {
    alignSelf: "center",
  },
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

export default AddSpell;
