import { ScrollView } from "react-native";
import Markdown from "react-native-markdown-display";
import markdownStyle from "./markdownStyle";

const Spell = ({ spell }) => (
  <ScrollView style={markdownStyle.background}>
    <Markdown style={markdownStyle}>
      {`# ${spell.nome}\n---\n${spell.descricao}`}
    </Markdown>
  </ScrollView>
);

export default Spell;
