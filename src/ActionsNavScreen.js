import { createStackNavigator } from "@react-navigation/stack";
import Action from "./Action";
import Actions from "./Actions";

const ActionsNav = createStackNavigator();

const ActionsNavScreen = ({ actions }) => (
  <ActionsNav.Navigator>
    <ActionsNav.Screen name="Ações" options={
      { headerStyle: {backgroundColor: "#343a40"},  headerTintColor: '#fff', }
    }>
      {(props) => <Actions {...props} actions={actions} />}
    </ActionsNav.Screen>
    <ActionsNav.Screen name="Action" component={Action} />
  </ActionsNav.Navigator>
);

export default ActionsNavScreen;
