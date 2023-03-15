import React from "react";
import {Text,TouchableOpacity,View,StyleSheet,Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Accueil({navigation}){
    return(
        <View style = {styles.container}>
             <View style ={styles.header}>
                    <TouchableOpacity onPress={()=>navigation.navigate("personnel")}>
                    <Ionicons name="person-outline" size={'40'} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headtext}>Personnal</Text>
                    <AntDesign name="questioncircleo" size={25} color="#63CCFF" style = {styles.An} />
            </View> 
            <View style={styles.home}>
            <AntDesign name="home" size={30} color="black" />
                    <Text style={styles.hometext}>Compte</Text>
            </View>
            <View  style={styles.home1}>
            <TouchableOpacity style = {styles.history} onPress={()=>navigation.navigate("historique")}>
                    <FontAwesome name="history" size={24} color="black" />
                    <Text style={styles.hometext}>Historique</Text>
            </TouchableOpacity>
            </View>
            <View style = {styles.card}>
                <View style = {{height:115,width:110,
                                borderColor:'#ddddd'}}>
                                    <View style = {{flex:2}}>
                                    <Image source={require('./secure.png')} style = {styles.Img1}/>
                                    </View>
                </View>
                <Text style= {styles.cardtext}>Faites vos transaction {"\n"}en toute securité  {"\n"}chez ExpressNkap</Text>
            </View>
            <View style = {styles.card1}>
                    <TouchableOpacity style = {styles.eye}>
                    <FontAwesome5 name="eye-slash" size={24} color="black" />
                    <Text style = {styles.solde}>Afficher le solde </Text>
                    </TouchableOpacity>
                    <View style = {styles.operation}>
                    <TouchableOpacity style = {styles.recharge} onPress={()=>navigation.navigate("Recharge")}>
                        <Text style = {styles.card1text}><Entypo name="credit-card" size={24} color="black" /> Recharger</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.envoyer} onPress={()=>navigation.navigate("Envoyer")}>
                        <Text style = {styles.card1text}>Envoyer <MaterialIcons name="send-to-mobile" size={24} color="black" /></Text>
                    </TouchableOpacity>
                    </View>
            </View>
            <View style = {styles.scroll}>
            <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                            <View style = {{height:160,width:140,marginLeft:30}}>
                                <View style = {{flex:2}}>
                                <Image source={require('./time.png')} style = {styles.Img}/>
                                </View>
                                <View><Text style={{fontWeight:"bold"}}>En un rien de temp</Text></View>
                            </View>
                            
                            <View style = {{height:160,width:140,marginLeft:30}}>
                                <View style = {{flex:2}}>
                                <Image source={require('./partner.gif')} style = {styles.Img}/>
                                </View>
                                <View><Text style={{fontWeight:"bold"}}>Nos partenaires</Text></View>
                            </View>

                            <View style = {{height:160,width:140,marginLeft:30}}>
                                <View style = {{flex:2}}>
                                <Image source={require('./card.png')} style = {styles.Img}/>
                                </View>
                                <View><Text style={{fontWeight:"bold"}}>Nos partenaires</Text></View>
                            </View>

                            <View style = {{height:175,width:140,marginLeft:30}}>
                                <View style = {{flex:2}}>
                                <Image source={require('./pourcent.png')} style = {styles.Img}/>
                                </View>
                                <View><Text style={{fontWeight:"bold"}}>Frais de transaction reduit</Text></View>
                            </View>
                        </ScrollView>    
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2f9',
      alignItems: 'left',
      justifyContent: 'top',
      paddingTop:250,

    },
    eye:{
        flexDirection:"row",
        top:15
    },

    An:{
            left:230
    },

    Img1:{
        height:115,
        width:115,
    },
    Img:{
        height:140,
        width:145,
    },
    history:{
            flexDirection:"row",
            left:35,
            
    },

    header:{
        flexDirection:"row",
        alignItems:"center",
        bottom:140
    },
    headtext:{
            left:20,
            fontWeight:'bold',
            fontSize:20,
        
         
    },
    home:{
        backgroundColor:"white",
        borderRadius:15,
        flexDirection:"row",
        alignItems:"center",
        bottom:30,
        width:"40%",
        height:50,
        left:50,
        bottom:120,
    },
    home1:{
        backgroundColor:"white",
        borderRadius:15,
        flexDirection:"row",
        alignItems:"center",
        alignContent:"center",
        bottom:30,
        width:"45%",
        height:50,
        left:180,
        bottom:170,
        backgroundColor:"#f4862f",
    },
    card:{
        bottom:130,
        backgroundColor:"white",
        width:"95%",
        borderRadius:10,
        left:10,
        flexDirection:"row",
    },
    cardtext:{
            fontWeight:"bold",
            fontSize:27,
    },
    card1:{
        width:"90%",
        height:200,
        bottom:100,
        left:20,
        borderRadius:10,
        backgroundColor:"#63CCFF",
        alignItems:"center"

    },
    card1text:{
            fontWeight:"bold",
            fontSize:15,
            color:"black",
    },
    scroll:{
        bottom:70
    },
    solde:{
        alignSelf:"center",
        fontSize:30,
        fontWeight:"bold",

    },
    operation:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignSelf:"center",
        bottom:-25,
        width:"70%"
    },
    recharge:{
        backgroundColor:"#f2f2f9",
        borderRadius:10,
        height:'40%',
        width:'50%',
        alignItems:"center",
        top:20,
        right:30,
        justifyContent:"space-around"
    },
    envoyer:{
        backgroundColor:"#f2f2f9",
        borderRadius:10,
        height:'40%',
        width:'50%',
        top:20,
        left:30,
        alignItems:"center",
        justifyContent:"space-around"
    },
    hometext:{
        fontWeight:'bold',
        left:5,
        fontSize:20
        }
});