import React from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Connection({navigation}) {
    return (
        <View style={styles.container}>
            <View style = {styles.card}>
            <Image source={require('./sign.png')} style = {styles.Img}/>
            </View>
            <View style={styles.connectionPage}>
                <View style={styles.connect}>
                    <Text style={styles.TextConnexion}> <FontAwesome name="sign-in" size={24} color="#63CCFF" /> Connexion </Text>
                </View>
                <View style = {styles.email}>
                    <Entypo name="email" size={24} color="black" />
                    <TextInput placeholder="Email"  style = {styles.TextMail}></TextInput>
                </View>
                <View style = {styles.password}>
                    <FontAwesome name="lock" size={24} color="black" />
                    <TextInput placeholder="Password"  style = {styles.TextPwd}></TextInput>
                </View>
                <TouchableOpacity><Text style = {styles.forgotpwd}>Forgot?</Text></TouchableOpacity>
                <View >
                    <TouchableOpacity style = {styles.login} onPress={()=>navigation.navigate("Accueil")}>
                                <Text style = {styles.textlogin}>Login</Text>
                    </TouchableOpacity>
                </View>
                    <View style = {styles.reg}>
                    <Text style={styles.new}>
                        New to the App?
                    </Text>
                    <TouchableOpacity>
                        <Text style = {styles.regtext}>Register</Text>
                    </TouchableOpacity>
                    </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({

    container:{
            backgroundColor:"white",
            width:"100%"
    },
    connectionPage: {
        paddingVertical: 100,
        paddingHorizontal: 40,
        marginVertical: 90,
        marginHorizontal: -5,
        borderRadius: 25,
        backgroundColor: 'white',
        bottom: 0,
        width: "90%",
        right: -20,
        shadowOpacity:15,
        shadowColor: "#63CCFF",
    },

    card:{
        backgroundColor:"#63CCFF",
        height:320,
        borderRadius:35,
        bottom:-40
    },

    Img:{
        height:"100%",
        width:"100%",
    },
    reg:{
            flexDirection:"row",
            bottom:-80,
            left:140
    },

    regtext:{
        color:"#f4862f",
        fontWeight:"bold"
    },


    TextConnexion: {
        fontSize: 20,
        fontWeight: 'bold',
        bottom: 80,
        left:-30,
    },
    Regis: {
        bottom: 50,
    },
    En: {
        fontWeight: 'bold',

    },
    email: {
        flexDirection:"row",
        borderColor: "#63CCFF",
        bottom:50,
        width:"100%",
        borderBottomWidth:2
    },

    password:{
        flexDirection:"row",
        borderColor: "#63CCFF",
        width:"100%",
        borderBottomWidth:2
    },
    login:{
            backgroundColor:"#63CCFF",
            bottom:-50,
            alignItems:"center",
            borderRadius:10,
            height:35,
    },
    textlogin:{
        color:"white",
        fontSize:20,
        fontWeight:"bold"
    },
    forgotpwd:{
        fontWeight:"bold",
        color:"#f4862f",
        left:240
    },
    TextMail: {
        fontWeight: 'bold',
        fontSize: 17,
        left:10
    },
    TextPwd: {
        fontWeight: 'bold',
        fontSize: 15,
        left:10
    },
  });