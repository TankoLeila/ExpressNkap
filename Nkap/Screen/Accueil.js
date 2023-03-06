import React from "react";
import {Text,TouchableOpacity,View,StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import { Image } from "react-native-web";

export default function Accueil(){
    return(
        <View style = {styles.container}>
            <View style ={styles.header}>
                    <TouchableOpacity>
                    <MaterialCommunityIcons name="account-details-outline" size={50} color="orange" />
                    </TouchableOpacity>
                    <Text style={styles.headtext}>Personnal</Text>
            </View>    
            <View style={styles.home}>
                    <FontAwesome5 name="home" size={40} color="black" />
                    <Text style={styles.hometext}>Compte</Text>
            </View>
            <View style = {styles.card}>
            <View style = {{height:80,width:80,
                            borderColor:'#dddddd'}}>
                                <View style = {{flex:2}}>
                                 image  
                                </View>
                            </View>
                    <Text style= {styles.cardtext}>votre argent est en toute securité</Text>
            </View>
            <View style = {styles.card1}>
                    <Text style = {styles.solde}>50000 XAF</Text>
                    <View style = {styles.operation}>
                    <TouchableOpacity style = {styles.recharge}>
                        <Text style = {styles.card1text}>+ Recharger</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.envoyer}>
                        <Text style = {styles.card1text}>Envoyer <AntDesign name="arrowright" size={12} color="black" /></Text>
                    </TouchableOpacity>
                    </View>
            </View>
            <View style = {styles.scroll}>
                        <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                                <View style = {{height:110,width:110,marginLeft:20,
                            borderWidth:0.5,borderColor:'#dddddd'}}>
                                <View style = {{flex:2}}>
                                   image
                                </View>
                                <View style = {{flex:1,paddingLeft:10,
                                paddingTop:10}}>
                                    <Text>home</Text>
                                </View>
                            </View>

                            <View style = {{height:110,width:110,marginLeft:20,
                            borderWidth:0.5,borderColor:'#dddddd'}}>
                                <View style = {{flex:2}}>
                                image
                                </View>
                                <View style = {{flex:1,paddingLeft:10,
                                paddingTop:10}}>
                                    <Text>home</Text>
                                </View>
                            </View>

                            <View style = {{height:110,width:110,marginLeft:20,
                            borderWidth:0.5,borderColor:'#dddddd'}}>
                                <View style = {{flex:2}}>
                                image
                                </View>
                                <View style = {{flex:1,paddingLeft:10,
                                paddingTop:10}}>
                                    <Text>home</Text>
                                </View>
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
      paddingTop:48,
    },
    flex2:{

    },

    header:{
        flexDirection:"row",
        alignItems:"center",
        bottom:45
    },
    headtext:{
            left:20
    },
    home:{
        
        backgroundColor:"white",
        borderRadius:15,
        flexDirection:"row",
        alignItems:"center",
        bottom:45,
        width:"95%",
        left:8
    },
    card:{
        flexDirection:"row",
        bottom:20,
        backgroundColor:"white",
        width:"95%",
        left:8,
        borderRadius:10
    },
    cardtext:{
            fontWeight:"bold",
            fontSize:20
    },
    card1:{
        width:"95%",
        height:150,
        borderWidth:1,
        left:8,
        borderRadius:10,
        backgroundColor:"#3589f2",
        alignItems:"center"

    },
    card1text:{
            fontWeight:"bold",
            fontSize:15,
            color:""
    },
    scroll:{
        bottom:-40
    },
    solde:{
        alignSelf:"center",
        fontSize:30,
        fontWeight:"bold"

    },
    operation:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignSelf:"center",
        bottom:-20,
        width:"70%"
    },
    recharge:{
        backgroundColor:"#f2f2f9",
        borderRadius:10,
        height:30,
        width:95,
        alignItems:"center",
        justifyContent:"space-around"
    },
    envoyer:{
        backgroundColor:"#f2f2f9",
        borderRadius:10,
        height:30,
        width:95,
        alignItems:"center",
        justifyContent:"space-around"
    }
});