import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Personnel({navigation}){
    return(
        <View style = {styles.container}>
            <View style = {styles.Back}>
                <TouchableOpacity onPress={()=>navigation.navigate('aide')}>
                    <AntDesign name="questioncircleo" size={25} color="#63CCFF" style = {styles.An} />
                    <Text style={styles.Ai}>Aide</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.Par}>
                <Text style = {styles.Para}>Paramètres</Text>
            </View>

            <View style = {styles.Back2}>
                <TouchableOpacity style = {styles.An2}>
                    <FontAwesome5 name="user" size={24} color="#63CCFF" />
                    <Text style = {styles.Ai2}>Profil</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.An4}>
                    <Ionicons name="notifications-outline" size={27} color="#63CCFF"/>
                    <Text style = {styles.Ai4}>Notifications</Text>
                </TouchableOpacity>
            </View> 

            <View style = {styles.Par}>
                <Text style = {styles.Para1}>À propos de nous</Text>   
            </View>

            <View style = {styles.Back3}>
                <TouchableOpacity>
                    <AntDesign name="infocirlceo" size={24} color="#63CCFF" style = {styles.An5} />
                    <Text style = {styles.Para2}>À propos de nous</Text>
                </TouchableOpacity>

                <TouchableOpacity >
                    <MaterialIcons name="policy" size={28} color="#63CCFF"  style = {styles.An6}/>
                    <Text style = {styles.Ai5}>Politique de confidentialité</Text>
                </TouchableOpacity>
                
            </View>

            <View style = {styles.Back4}>
                <TouchableOpacity>
                <MaterialIcons name="logout" size={34} color="#63CCFF" style = {styles.An8} />
                    <Text style={styles.Ai7}>Se déconnecter</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f2f2f9',
        paddingTop:18
    },

    Back:{
        backgroundColor:"white",
        borderRadius:10,
        width:"95%",
        left:10,
        height:60,
        shadowColor:"silver",
        shadowOpacity:"100%",
        shadowRadius:10,
    },

    Ai:{
        left:105,
        top:-10,
        fontWeight:"bold",
        fontSize:20
    },

    An:{
        left:45,
        top:15
    },

    Par:{
        top:40,
        left:15,
    },

    Para:{
        fontSize:18
    },

    Back2:{
        backgroundColor:"white",
        borderRadius:10,
        width:"95%",
        left:10,
        height:235,
        top:50,
        shadowColor:"silver",
        shadowOpacity:"100%",
        shadowRadius:10,
        
    },

    An2:{
        top:30,
        left:50,
        flexDirection:"row"
    },

    Ai2:{
        fontSize:20,
        fontWeight:"bold",
        left:30
    },

    An3:{
        top:55,
        left:48,
        
    },

    Ai3:{
        top:29,
        left:105,
        fontSize:20,
        fontWeight:"bold"
    },

    An4:{
        top:100,
        left:50,
        flexDirection:"row"

    },

    Ai4:{
        fontSize:20,
        fontWeight:"bold",
        left:25
    },


    Back3:{
        top:100,
        left:10,
        backgroundColor:"white",
        borderRadius:10,
        width:"95%",
        height:240,
        shadowColor:"silver",
        shadowOpacity:"100%",
        shadowRadius:10,

    },

    Para1:{
        fontSize:18,
        top:40,
        
    },

    An5:{
        top:35,
        left:50
    },

    Para2:{
        fontSize:18,
        top:12,
        left:105,
        fontSize:20,
        fontWeight:"bold"
    },

    An6:{
        top:55,
        left:49
    },

    Ai5:{
        top:28,
        left:105,
        fontSize:20,
        fontWeight:"bold"
    },



    Ai6:{
        top:48,
        left:105,
        fontSize:20,
        fontWeight:"bold"
    },
    
    Back4:{
        top:100,
        left:10,
        backgroundColor:"white",
        borderRadius:10,
        width:"95%",
        height:60,
        shadowColor:"silver",
        shadowOpacity:"100%",
        shadowRadius:10,
        top:120
    },

    An8:{
        top:15,
        left:55
    },

    Ai7:{
        top:-15,
        left:105,
        fontSize:20,
        fontWeight:"bold"
    }

});