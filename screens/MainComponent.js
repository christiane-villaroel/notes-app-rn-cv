import { useState } from "react";
import { View } from "react-native";
import NotesScreen from "./NotesScreen";
import { NOTES } from "../shared/notes";
import { createStackNavigator } from "@react-navigation/stack";
/* import { createStackNavigator } from "@react-navigation/stack"; */


const Stack = createStackNavigator();

function NotesNavigator() {
    const [notes, setNotes] =useState(NOTES);
    return (
        <Stack.Screen
            name="Notes"
            component={NotesScreen}
        >
            {(notes) => <NotesScreen data={notes} />}
        </Stack.Screen>
    );
}

const Main = () => {

    return (
        <View>
            <Stack.Navigator>
                <NotesNavigator/>
            </Stack.Navigator>
        </View>
    );
}

export default Main;