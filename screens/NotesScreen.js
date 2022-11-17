import { FlatList, View,Text,StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import { useState } from "react"; 
import { NOTES } from "../shared/notes";

function NotesScreen () {
    const [notes, setNotes]=useState(NOTES)
    const renderNoteItem = ({ item: note }) => {
        return (
            <ListItem style={styles.listItem}>
                <ListItem.Content>
                    <ListItem.Title>{note.title}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        );
    };
 
    return (

        <FlatList
            data={notes}
            renderItem={renderNoteItem}
            keyExtractor={(item) => item.id.toString()} />

    ); 
}

const styles = StyleSheet.create({
    listItem:{
        borderBottomColor:'black',
        borderWidth:2,
    }
})


export default NotesScreen;