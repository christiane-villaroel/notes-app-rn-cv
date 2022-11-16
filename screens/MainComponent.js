import NotesScreen from "./NotesScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NOTES } from "../shared/notes";
import { useState } from "react";


const Stack = createStackNavigator();
function NotesNavigator() {
    const [notes, setNotes]=useState(NOTES)

    return (
        <Stack.Screen
            name="Notes"
            component={NotesScreen}
        >
            {(notes)=> <NotesScreen data={notes}/>}
        </Stack.Screen>
    );
}

const Main = () => {

    return (
        <Stack.Navigator initialRouteName='Notes'>
            <NotesNavigator/>
        </Stack.Navigator>
    );
}

 {
      /*  <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
          <Text>Home Screen</Text>
        </View> */
    /*  <Stack.Navigator>
                <NotesNavigator/>
            </Stack.Navigator> */}
export default Main;