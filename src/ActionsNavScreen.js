import { createStackNavigator } from '@react-navigation/stack'
import Action from './Action'
import Actions from './Actions'


const ActionsNav = createStackNavigator()


const ActionsNavScreen = ({actions}) => (
   <ActionsNav.Navigator >
     <ActionsNav.Screen name="Ações">
       { props => <Actions {...props} actions={actions}/> }
     </ActionsNav.Screen>
     <ActionsNav.Screen name="Action" component={Action} />
   </ActionsNav.Navigator>
 )


export default ActionsNavScreen