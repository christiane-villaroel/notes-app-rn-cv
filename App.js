import 'react-native-gesture-handler';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Main from './screens/MainComponent';


export default function App() {
  return (
    <NavigationContainer>
      <Main/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
