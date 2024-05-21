import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as Random from "expo-random";
import SelectNivel from "./components/selectNivel";
import SelectEscola from "./components/selectEscola";
import SelectDuracao from "./components/selectDuracao";
import SelectTempConj from "./components/selectTempConj";
import SelectComponentes from "./components/selectComponentes";
import styles from "./styles/styles";
import { SafeAreaView } from "react-native-safe-area-context";

class AddSpell extends React.Component {
  state = {
    nome: "",
    nivel: "",
    escola: "",
    tempo_de_conjuracao: { quantidade: 0, unidade: "" },
    componentes: {
      verbal: false,
      somatico: false,
      material: false,
      materialTipo: "",
    },
    alcance: "",
    duracao: {
      tipo: "",
      concentracao: false,
      ate: false,
      quantidade: 0,
      unidade: "",
    },
    descricao: "",
  };

  onChangeSimples = (key, value) => {
    this.setState({ [key]: value });
  };

  onChangeComplexo = (parentKey, key, value) => {
    this.setState((prevState) => ({
      [parentKey]: {
        ...prevState[parentKey],
        [key]: value,
      },
    }));
  };

  onChangeComplexoNumerico = (parentKey, key, value) => {
    if (isNaN(value)) {
      value = 0;
    }
    this.setState((prevState) => ({
      [parentKey]: {
        ...prevState[parentKey],
        [key]: value,
      },
    }));
  };

  submit = () => {
    const {
      nome,
      nivel,
      escola,
      tempo_de_conjuracao,
      componentes,
      alcance,
      duracao,
      descricao,
    } = this.state;

    if (
      nome === "" ||
      nivel === "" ||
      escola === "" ||
      tempo_de_conjuracao.quantidade === 0 ||
      tempo_de_conjuracao.unidade === "" ||
      (componentes.material && componentes.materialTipo === "") ||
      alcance === "" ||
      duracao.tipo === "" ||
      (duracao.tipo === "Temporária" &&
        (duracao.quantidade === 0 || duracao.unidade === "")) ||
      descricao === ""
    ) {
      alert("Preencha todos os campos");
    } else {
      const spell = {
        nome,
        nivel,
        escola,
        tempo_de_conjuracao,
        componentes,
        alcance,
        duracao,
        descricao,
        id: String(Random.getRandomBytes(8)),
      };
      this.props.addSpell(spell);
      this.setState({
        nome: "",
        nivel: "",
        escola: "",
        tempo_de_conjuracao: { quantidade: 0, unidade: "" },
        componentes: {
          verbal: false,
          somatico: false,
          material: false,
          materialTipo: "",
        },
        alcance: "",
        duracao: {
          tipo: "",
          concentracao: false,
          ate: false,
          quantidade: 0,
          unidade: "",
        },
        descricao: "",
      });
    }
  };
  render() {
    return (
      <ScrollView style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.heading}>Adicionar Magia</Text>
          <View style={styles.subContainer}>
            <Text style={styles.section}>Informações Básicas</Text>
            <TextInput
              placeholder="Nome da Magia"
              onChangeText={(value) => this.onChangeSimples("nome", value)}
              style={styles.input}
              value={this.state.nome}
            />
            <SelectNivel
              onValueChange={(value) => this.onChangeSimples("nivel", value)}
              selectedValue={this.state.nivel}
            />
            <SelectEscola
              onValueChange={(value) => this.onChangeSimples("escola", value)}
              selectedValue={this.state.escola}
            />
          </View>
          <SelectTempConj
            valueQtd={this.state.tempo_de_conjuracao.quantidade}
            valueUnidade={this.state.tempo_de_conjuracao.unidade}
            onValueChange={(value) =>
              this.onChangeComplexo("tempo_de_conjuracao", "unidade", value)
            }
            onChangeText={(value) =>
              this.onChangeComplexoNumerico(
                "tempo_de_conjuracao",
                "quantidade",
                value
              )
            }
          />
          <View style={styles.subContainer}>
            <Text style={styles.section}>Alcance</Text>
            <TextInput
              placeholder="Alcance da magia"
              onChangeText={(value) => this.onChangeSimples("alcance", value)}
              style={styles.input}
              value={this.state.alcance}
            />
          </View>
          <SelectComponentes
            valueVerbal={this.state.componentes.verbal}
            valueMaterial={this.state.componentes.material}
            valueSomatico={this.state.componentes.somatico}
            descMaterial={this.state.componentes.materialTipo}
            onPressVerbal={(value) =>
              this.onChangeComplexo("componentes", "verbal", value)
            }
            onPressSomatico={(value) =>
              this.onChangeComplexo("componentes", "somatico", value)
            }
            onPressMaterial={(value) =>
              this.onChangeComplexo("componentes", "material", value)
            }
            onChangeTextMaterial={(value) =>
              this.onChangeComplexo("componentes", "materialTipo", value)
            }
          />
          <SelectDuracao
            onChangeTextQtd={(value) =>
              this.onChangeComplexoNumerico("duracao", "quantidade", value)
            }
            onPressAte={(value) =>
              this.onChangeComplexo("duracao", "ate", value)
            }
            onPressConcentracao={(value) =>
              this.onChangeComplexo("duracao", "concentracao", value)
            }
            onValueChangeTipo={(value) =>
              this.onChangeComplexo("duracao", "tipo", value)
            }
            onValueChangeUnidade={(value) =>
              this.onChangeComplexo("duracao", "unidade", value)
            }
            valueAte={this.state.duracao.ate}
            valueConcentracao={this.state.duracao.concentracao}
            valueQtd={this.state.duracao.quantidade}
            valueTipo={this.state.duracao.tipo}
            valueUnidade={this.state.duracao.unidade}
          />
          <View style={styles.subContainer}>
            <Text style={styles.section}>Descrição</Text>
            <TextInput
              multiline
              numberOfLines={4}
              placeholder="Descrição (Suporta Markdown)"
              onChangeText={(value) => this.onChangeSimples("descricao", value)}
              style={styles.inputDesc}
              value={this.state.descricao}
            />
          </View>
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

export default AddSpell;
