import { StatusBar } from 'expo-status-bar';
import {Text,View,StyleSheet,} from "react-native";
import Navigation from './NavigationContainer';


export default function App() {
  return (
    <Navigation>
      
    </Navigation>
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
