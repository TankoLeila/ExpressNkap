import React from "react";
import {Text, View, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Envoyer() {
    return (
        <View style = {styles.container}>
         <View >
         <Image source={require('./card.png')} style = {styles.Img}/>
         </View>

            <Text style = {styles.Sal}>Entrez le numéro de compte du bénéficiaire :</Text>
            <View style = {styles.SearchBar}>
            <TextInput style = {styles.bsearch} placeholder = 'Search'>Numéro de Compte</TextInput>

            <TouchableOpacity style = {styles.iconSearch}><MaterialCommunityIcons name="account-circle" size={24} color="black" /></TouchableOpacity>

            
             
            </View>

            <Text style = {styles.Sal1}>Veuillez saisir le montant à transférer (entre 5 et 500000 FCFA)</Text>

            <View style = {styles.SearchBar1}>
            <TextInput style = {styles.bsearch1}></TextInput>
            </View>
            <Text style = {styles.p}>FCFA</Text>

            <TouchableOpacity style = {styles.touch}>
               <Text style = {styles.Ter}>Valider</Text>
            </TouchableOpacity>


        </View>
        
    );
}

const styles = StyleSheet.create({
        container:{
                flex: 1,
                backgroundColor:"white",
                paddingTop:48
        },

        Sal:{
                alignItems: 'center',
                left:7,
                top:100,
                fontSize:20
        }, 

        SearchBar:{
                borderWidth:2,
                paddingHorizontal:10,
                paddingVertical:2,
                backgroundColor:'white',
                width:'98%',
                borderColor:'aqua',
                flexDirection:"row",
                justifyContent:'space-between',
                borderRadius:15,
                alignItems:'center',
                left:5,
                top:150,
                height:50                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
              },

        bsearch:{
                left:15,
                width:340,
                height:20,
                fontSize:20,
                color:"#dadada",
                justifyContent:"center", 
        },

        Sal1:{
                alignItems: 'center',
                left:7,
                top:250,
                fontSize:20
        },

        SearchBar1:{
                borderWidth:2,
                paddingHorizontal:10,
                paddingVertical:2,
                backgroundColor:'white',
                width:'98%',
                borderColor:'aqua',
                flexDirection:"row",
                justifyContent:'space-between',
                borderRadius:15,
                alignItems:'center',
                left:5,
                top:300,
                height:50
        },

        bsearch1:{
                left:15,
                width:340,
                height:20,
                fontSize:20,
                color:"#dadada",
                justifyContent:"center", 
        },

       p:{
        top:267,
        left:350
       },

       touch:{
        backgroundColor:"aqua",
        width:'55%',
     //    height:100,
        paddingVertical:10,
        alignItems:"center",
        top:350,
        left:100,
        borderRadius:10,
     },
  
     Ter:{
         fontSize:20,
         fontWeight:"bold"
     },

     Img:{
                height:130,
                width:130,
                left:25
             
     }
});

