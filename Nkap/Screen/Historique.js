import React from "react";
import {Text, View, StyleSheet, TouchableOpacity, TextInput, Image, ImageBackground} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Historique() {
    return (
        <View style = {styles.container}>
        <ImageBackground source={require('./list.png')} style = {styles.Img1}/>
        </View>
        
    );
}

const styles = StyleSheet.create({
        container:{
                flex: 1,
                backgroundColor:"white",
                paddingTop:48,
        },    
        
        Img1:{
            height:350,
            width:350,
            top:200,
            left:50,

        },
});

