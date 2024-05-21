import { ScrollView } from "react-native";
import Markdown from "react-native-markdown-display";
import markdownStyle from "./styles/markdownStyle";

const Componentes = ({ spellComp }) => {
  let componentes = "";

  if (spellComp.verbal) componentes += "V";
  if (spellComp.somatico) {
    if (componentes.length > 0) componentes += ", ";
    componentes += "S";
  }
  if (spellComp.material) {
    if (componentes.length > 0) componentes += ", ";
    componentes += `M (${spellComp.materialTipo})`;
  }

  return componentes;
};

const Duracao = ({ spellDur }) => {
  let duracao = "";
  if (spellDur.tipo == "Temporária") {
    if (spellDur.concentracao) {
      duracao += "Concentração, até ";
    } else if (spellDur.ate) {
      duracao += "Até ";
    }
    duracao += `${spellDur.quantidade} ${spellDur.unidade} `;
  } else {
    duracao = spellDur.tipo;
  }

  return duracao;
};

const Spell = ({ spell }) => (
  <ScrollView style={markdownStyle.background}>
    <Markdown style={markdownStyle}>
      {`# ${spell.nome}\n*` +
        `${spell.nivel != "0" ? spell.nivel.concat("º nível") : "Cantrip"} ${spell.escola.toLowerCase()}*\n` +
        `- **Tempo de Conjuração:** ${spell.tempo_de_conjuracao.quantidade} ${spell.tempo_de_conjuracao.unidade}\n` +
        `- **Alcance:** ${spell.alcance}\n` +
        `- **Componentes:** ${Componentes({spellComp: spell.componentes,})}\n` +
        `- **Duração:** ${Duracao({spellDur: spell.duracao,})}\n` +
        `---\n${spell.descricao}`}
    </Markdown>
  </ScrollView>
);

export default Spell;
