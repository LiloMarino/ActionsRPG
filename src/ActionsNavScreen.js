import { createStackNavigator } from "@react-navigation/stack";
import Action from "./Action";
import Actions from "./Actions";

const ActionsNav = createStackNavigator();

const ActionsNavScreen = ({ actions }) => (
  <ActionsNav.Navigator>
    <ActionsNav.Screen
      name="Actions"
      options={{
        headerTitle: "Ações",
        headerStyle: { backgroundColor: "#343a40" },
        headerTintColor: "#fff",
      }}
    >
      {(props) => <Actions {...props} actions={actions} />}
    </ActionsNav.Screen>
    <ActionsNav.Screen
      name="Action"
      options={({ route }) => ({
        headerTitle: route.params?.action?.nome || "Ação",
        headerStyle: { backgroundColor: "#343a40" },
        headerTintColor: "#fff",
      })}
    >
      { props => <Action {...props} action={props.route.params.action}/> }
    </ActionsNav.Screen>
  </ActionsNav.Navigator>
);

export default ActionsNavScreen;
