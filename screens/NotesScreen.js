import { FlatList, View,Text,StyleSheet } from "react-native";
import {List,ListItem } from "react-native-elements";

const NotesScreen = ({notes})=>{
    const renderNoteItem = ({item:note}) => {
        return(
            <ListItem style={styles.listItem}>
                <ListItem.Content>
                <ListItem.Title >{note.title}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        )
    } 

   return (
 
        <FlatList
        data={notes}
        renderItem ={renderNoteItem}
        keyExtractor={(item)=> item.id.toString()}
        />
        
    )
}

const styles = StyleSheet.create({
    listItem:{
        borderBottomColor:'black',
        borderWidth:2,
        

    }
})


export default NotesScreen;