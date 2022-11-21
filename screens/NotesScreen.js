import { FlatList, View,Text,StyleSheet } from "react-native";
import { Button, ListItem } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from "react"; 
import { NOTES } from "../shared/notes";
import renderNotes from "../features/renderNotes";

function NotesScreen ({navigation}) {
    const [notes, setNotes]=useState(NOTES)

    const eventHandler= (item)=>{
        <renderNotes item={item}/>
    };
    const renderNoteItem = ({ item: note }) => {
        return (
            <ListItem style={styles.listItem} onPress={()=>eventHandler(note)}>
                <ListItem.Content style={styles.listContent}>
                    <ListItem.Title style={{flex:2,margin:0}}>
                        {note.title}
                    </ListItem.Title>
                    <Icon
                     style={{ justifyContent:'flex-end'}} 
                     name='chevron-circle-down' 
                     size={21} 
                     color='#900'
                     />
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
    },
    listContent:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }

    
});


export default NotesScreen;