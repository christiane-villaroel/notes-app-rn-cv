import { Text,View,Card } from "react-native-elements";

export default renderNotes =  (props) => {
    return (
        <View>
            <Card>
                <Text>{props.title}</Text>
            </Card>
        </View>
    )
}