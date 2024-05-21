import { createStackNavigator } from "@react-navigation/stack";
import AddAction from "./AddAction";
import AddSpell from "./AddSpell";
import OptionsMenu from "./OptionsMenu"; // Certifique-se de importar o novo componente

const OptionNav = createStackNavigator();

const OptionNavScreen = (props) => (
  <OptionNav.Navigator>
    <OptionNav.Screen
      name="Menu de Opções"
      options={{
        headerTitle: "Menu de Opções",
        headerStyle: { backgroundColor: "#343a40" },
        headerTintColor: "#fff",
      }}
    >
      {(props) => <OptionsMenu {...props} />}
    </OptionNav.Screen>
    <OptionNav.Screen
      name="Add Action"
      options={{
        headerTitle: "Adicionar Ação",
        headerStyle: { backgroundColor: "#343a40" },
        headerTintColor: "#fff",
      }}
    >
      {() => <AddAction addAction={props.addAction} />}
    </OptionNav.Screen>
    <OptionNav.Screen
      name="Add Spell"
      options={{
        headerTitle: "Adicionar Magia",
        headerStyle: { backgroundColor: "#343a40" },
        headerTintColor: "#fff",
      }}
    >
      {() => <AddSpell addSpell={props.addSpell} />}
    </OptionNav.Screen>
  </OptionNav.Navigator>
);

export default OptionNavScreen;
