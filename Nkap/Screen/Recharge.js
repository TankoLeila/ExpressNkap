import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet,Picker, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Recharge() {
  const [fullName, setFullName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [rechargeMode, setRechargeMode] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="settings-outline" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Recharge de compte</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nom complet"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Numéro de compte"
          value={accountNumber}
          onChangeText={setAccountNumber}
        />
        {/* <Picker
          style={styles.select}
          placeholder="Selection du mode de recharge"
          selectedValue={rechargeMode}
          onValueChange={(itemValue) => setRechargeMode(itemValue)}
        >
          <Picker.Item label="Mobile Money" value="mtn" />
          <Picker.Item label="Orange Money" value="orange" />
          <Picker.Item label="Espece" value="espece" />
        </Picker> */}
        <TextInput
          style={styles.input}
          placeholder="Montant à recharger"
          value={amount}
          onChangeText={setAmount}
        />

        <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.cancelButton]}>
          <Text style={styles.buttonText}>Annuler</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Recharger le compte</Text>
        </TouchableOpacity>
        
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3589f2',
  },
  form: {
    width: '80%',
    marginTop: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  select: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#3589f2',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  button1: {
    backgroundColor: '#3589f2',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: 'gray',
  },
});