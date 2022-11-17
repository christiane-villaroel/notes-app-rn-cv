import NotesScreen from "./NotesScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NOTES } from "../shared/notes";
import { useState } from "react";

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
    const [notes, setNotes]= useState(NOTES)
    return (
        <Stack.Navigator initialRouteName='Notes'>
            <Stack.Screen
            name="Notes"
            >
                {props => <NotesScreen {...props} extraData={notes} />}
            </Stack.Screen>   
        </Stack.Navigator>
    );
}
export default Main;