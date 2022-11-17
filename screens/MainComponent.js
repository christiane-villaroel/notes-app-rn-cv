import NotesScreen from "./NotesScreen";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

/* function NotesNavigator() {
  

    return (
        <Stack.Screen
            name="Notes"
        >
            {(notes)=> <NotesScreen data={notes}/>}
        </Stack.Screen>   
    );
} 
 */

const Main = () => {
    return (
        <Stack.Navigator initialRouteName='Notes'>
            <Stack.Screen
            name="Notes"
            component={NotesScreen}
            >
            </Stack.Screen>   
        </Stack.Navigator>
    );
}
export default Main;