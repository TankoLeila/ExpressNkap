import React from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
const Images = () => {
    return (
        <View>
            <Text>This is Images file</Text>
            <Image style={styles.backgroundImg} source={require("../assets/adaptive-icon.png")} />
        </View>
    );
}

export default function Connection() {
    return (
        <View style={styles.background}>
            <View style={styles.connectionPage}>

                <View style={styles.ENkap}>
                    <Text style={styles.En}>ExpressNkap</Text>
                </View>

                <View style={styles.connect}>
                    <Text style={styles.TextConnexion}> <FontAwesome name="sign-in" size={24} color="black" /> Connexion </Text>
                </View>


                <View style={styles.mailConnexion}>

                    <Text style={styles.TextMail}>Email</Text>
                    <TextInput style={styles.email} placeholder="please enter your mail"></TextInput>
                </View>

                <View style={styles.pwdConnexion}>
                    <Text style={styles.TextPwd}>PassWord</Text>
                    <TextInput style={styles.pwd} placeholder="please enter your password"></TextInput>
                </View>

                <View style={styles.BtnValid} >
                    <TouchableOpacity style={styles.BtnValidConnect} ><FontAwesome name="check-circle-o" size={40} color="aqua" /></TouchableOpacity>
                </View>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({

    connectionPage: {
        paddingVertical: 100,
        paddingHorizontal: 40,
        marginVertical: 90,
        marginHorizontal: -5,
        borderRadius: 25,
        backgroundColor: 'white',
        bottom: -80,
        width: "90%",
        right: -20,
        shadowOpacity: 15,
        shadowColor: "aqua",
     

    },
    TextConnexion: {
        fontSize: 20,
        fontWeight: 'bold',
        bottom: 50,
        textAlign: "center",
    },
    Regis: {
        bottom: 50,
    },
    En: {
        fontWeight: 'bold',

    },
    ENkap: {
        bottom: 70,
        left: 10
    },
    mailConnexion: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    email: {
        right: 35,
        paddingHorizontal: 10,
        paddingVertical: 15,
        width: '55%',
        borderRadius: 5,
        left: -10,
        color: "black",
        borderWidth: 1,
        borderColor: "#c2f2f9",


    },
    pwdConnexion: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: -40

    },

    pwd: {

        right: 35,
        paddingHorizontal: 10,
        paddingVertical: 15,
        width: '55%',
        borderRadius: 5,
        left: -10,
        color: "black",
        borderWidth: 1,
        borderColor: "#c2f2f9",


    },
    TextMail: {
        fontWeight: 'bold',
        fontSize: 17
    },
    TextPwd: {
        fontWeight: 'bold',
        fontSize: 15
    },
    BtnValidConnect: {
        left: 190,
        bottom: -60
    },
    background: {
       backgroundColor:'white',
    
    }

});