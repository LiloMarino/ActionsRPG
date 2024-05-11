import { createStackNavigator } from '@react-navigation/stack'
import City from './Action'
import Cities from './Actions'


const CitiesNav = createStackNavigator()


const CitiesNavScreen = ({cities, addLocation}) => (
   <CitiesNav.Navigator >
     <CitiesNav.Screen name="Cities">
       { props => <Cities {...props} cities={cities}/> }
     </CitiesNav.Screen>
     <CitiesNav.Screen name="City" component={City} />
   </CitiesNav.Navigator>
 )


export default CitiesNavScreen