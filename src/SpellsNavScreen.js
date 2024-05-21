import { createStackNavigator } from "@react-navigation/stack";
import Spell from "./Spell";
import Spells from "./Spells";

const SpellsNav = createStackNavigator();

const SpellsNavScreen = ({ spells }) => (
  <SpellsNav.Navigator>
    <SpellsNav.Screen
      name="Spells"
      options={{
        headerTitle: "Magias",
        headerStyle: { backgroundColor: "#343a40" },
        headerTintColor: "#fff",
      }}
    >
      {(props) => <Spells {...props} spells={spells} />}
    </SpellsNav.Screen>
    <SpellsNav.Screen
      name="Spell"
      options={({ route }) => ({
        headerTitle: route.params?.spell?.nome || "Magia",
        headerStyle: { backgroundColor: "#343a40" },
        headerTintColor: "#fff",
      })}
    >
      {(props) => <Spell {...props} spell={props.route.params.spell} />}
    </SpellsNav.Screen>
  </SpellsNav.Navigator>
);

export default SpellsNavScreen;
