import { ScrollView } from "react-native";
import Markdown from "react-native-markdown-display";
import markdownStyle from "./markdownStyle";

const Action = ({ action }) => (
  <ScrollView style={markdownStyle.background}>
    <Markdown style={markdownStyle}>
      {`# ${action.nome}\n---\n${action.descricao}`}
    </Markdown>
  </ScrollView>
);

export default Action;
