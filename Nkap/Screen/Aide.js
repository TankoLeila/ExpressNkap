import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';




export default function Aide({ navigation }) {
  return (
    <View style={styles.help}>

      <View style={styles.header}>
        <Text style={styles.En} >
          ExpressNkap
        </Text>

        <TouchableOpacity style={styles.menuBtn} onPress={() => navigation.navigate("personnel")}>
          <MaterialIcons name="menu-open" size={24} color="black" />
        </TouchableOpacity>
      </View>


      <View style={styles.helpPlace} >
        <Text style={styles.helpText}>
          Comment pouvons nous vous aider?
        </Text>


        <TextInput placeholder="Que voulez vous?" style={styles.searchHelp} >   </TextInput>

        <TouchableOpacity style={styles.searchBtn}> <EvilIcons name="search" size={24} color="black" /> </TouchableOpacity>

      </View>




      <View style={styles.infoAccount} >
        <TouchableOpacity>
          <Text style={styles.account}> <FontAwesome5 name="sign-in-alt" size={24} color="black" /> Manage Account </Text>
        </TouchableOpacity>
      </View>


      <View style={styles.infoMoney} >
        <TouchableOpacity>
          <Text style={styles.receive}> <FontAwesome name="exchange" size={24} color="black" /> Envoyer et recevoir de l'argent</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoAddMoney} >
        <TouchableOpacity>
          <Text style={styles.recharge}> <MaterialIcons name="send-to-mobile" size={24} color="black" /> Recharger son compte </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  helpText: {
    fontSize: 20,
    fontWeight: 'bold',
    bottom: 30,
    left: 3,


  },
  En: {
    fontWeight: 'bold',

  },
  infoAccount: {
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: '#63ccff',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    width: '90%',
    top: 100,
    paddingEnd: 20


  },

  infoMoney: {
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: '#527ff2',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    width: '90%',
    top: 130,


  },
  infoAddMoney: {
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: '#63c2be',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    width: '90%',
    top: 150,
  },
  account: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 15
  },
  menuBtn: {
    right: 15
  },
  helpPlace: {
    top: 70,
    left: 10
  },
  searchHelp: {
    borderBottomWidth: 2,
    borderBottomColor: '#63ccff',
    marginHorizontal: 15,
    fontWeight: 'bold'

  },
  searchBtn: {
    bottom: 30,
    left: 250
  }

});