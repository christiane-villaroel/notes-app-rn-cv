import NotesScreen from "./NotesScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";

const Stack = createStackNavigator();

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