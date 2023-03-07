import { StyleSheet, View,Text,TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Image } from 'expo-image';


export default function Splash({navigation}) {
  
    return (
      <SafeAreaProvider>
      
      
        <View style={styles.container}>
      
        <Text style={styles.titre}>La securité de votre Argent notre priorité</Text>
        <View style={styles.card}>
            <TouchableOpacity style={styles.icon} onPress={()=>navigation.navigate("Connection")}>
                <Text style ={styles.txt}>Se connecter</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.icon1} onPress={()=>navigation.navigate("Register")}>
                 <Text style ={styles.txt}>S'inscrire</Text>
            </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
      </SafeAreaProvider>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f10f2f5',
      alignItems: 'left',
      justifyContent: 'top',
      paddingTop:48
    },

    titre:{
        fontWeight:'bold',
        textAlign:'center',
        textShadowColor:'#000',
        bottom:80,
        fontSize:20,
    },
    
    card:{
            backgroundColor:"white",
            bottom:-70,
            height:250,
            width:"90%",
            alignItems:"center",
            borderRadius:15,
            left:15,
            shadowColor:"black",
            shadowOpacity:15,
    },
    icon:{
            bottom:-55,
            backgroundColor:"#64a8fc",
            borderRadius:5,
            width:"70%",
            alignItems:"center",
            height:40,
            justifyContent:"space-evenly"
    },
    icon1:{
            bottom:-100,
            backgroundColor:"#64a8fc",
            width:"70%",
            borderRadius:5,
            alignItems:"center",
            height:40,
            justifyContent:"space-evenly",
    },
    txt:{
        color:"white",
        fontWeight:"bold"
    }
  });