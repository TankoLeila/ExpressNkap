import { StyleSheet, View,Text,TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Image } from 'expo-image';


export default function Splash({navigation}) {
  
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
            <View style ={styles.header}>
              <Text style = {styles.titre}>Bienvenue                                                                                                     sur ExpressNkap</Text>
              <Text style = {styles.soustitre}>La securité de votre Argent, notre priorité</Text>
            </View>
        <View style={styles.card}>
            <TouchableOpacity style={styles.icon} onPress={()=>navigation.navigate("Connection")}>
                <Text style ={styles.txt}>Se connecter</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.icon1} onPress={()=>navigation.navigate("Register")}>
                 <Text style ={styles.txt}>S'inscrire</Text>
            </TouchableOpacity>
        </View>
        <View style = {styles.vimg}>
        <Image source={require('./card.png')} style = {styles.Img}/>
        <Image source={require('./pourcent.png')} style = {styles.Img}/>
        </View>
        <StatusBar style="auto" />
      </View>
      </SafeAreaProvider>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'left',
      justifyContent: 'top',
      paddingTop:48
    },
    header:{
        right:-10,
        backgroundColor:"#63CCFF",
        height:280,
        bottom:-10,
        width:"100%",
        left:0,
        borderRadius:40
    },
    Img:{
      height:110,
      width:200,
  },
  vimg:{
      left:90,
      bottom:-110,
      width:"50%",
      alignItems:"center",
      justifyContent:"center",
      flexDirection:"row"
  },
    titre:{
        fontWeight:'bold',
        fontSize:30,
        bottom:-150,
        left:20,
        color:"white"
    },
    soustitre:{
         fontWeight:"bold",
         bottom:-150,
         left:20,
         color:"white"
    },
    
    card:{
            backgroundColor:"white",
            bottom:-90,
            height:250,
            width:"90%",
            alignItems:"center",
            borderRadius:15,
            left:15,
            shadowColor:"#63CCFF",
            shadowOpacity:15,
    },
    icon:{
            bottom:-55,
            backgroundColor:"#63CCFF",
            borderRadius:5,
            width:"70%",
            alignItems:"center",
            height:40,
            justifyContent:"space-evenly"
    },
    icon1:{
            bottom:-100,
            backgroundColor:"#63CCFF",
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