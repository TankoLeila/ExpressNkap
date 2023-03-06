import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useForm, Controller } from "react-hook-form";

function SignInScreen({ navigation }) {
    const [hide, setHide] = useState(true);
    const {
      control,
      handleSubmit,
      getValues,
      formState: { errors, isValid },
    } = useForm({
      mode: "onBlur",
      defaultValues: {
        mail: "",
        password: "",
        confirmPassword: "",
      },
    });
  
    const onSubmit = (signin) => navigation.navigate("PersonalData", { signin });
  
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.text}>Email/Username</Text>
          <Controller
            control={control}
            name="mail"
            render={({ field: { onChange, value, onBlur } }) => (
              <TextInput
                style={styles.input}
                placeholder="Entrez votre email ou mot de passe"
                value={value}
                onBlur={(value) => onBlur(value)}
                onChangeText={(value) => onChange(value)}
              />
            )}
            rules={{
              required: {
                value: true,
                message: (
                  <Text style={{ color: "red", marginBottom: 20 }}>
                    <Icon name="warning" size={20} />
                    Le mail est obligatoire
                  </Text>
                ),
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: (
                  <Text style={{ color: "red", marginBottom: 20 }}>
                    <Icon name="warning" size={20} />
                    Le mail est invalide
                  </Text>
                ),
              },
            }}
          />
          {errors.mail && errors.mail.message}
          <Text style={styles.text}>Mot de passe</Text>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value, onBlur } }) => (
              <View style={styles.containerPassword}>
                <TextInput
                
                  secureTextEntry={hide ? true : false}
                  placeholder="Entrez votre mot de passe"
                  value={value}
                  onBlur={(value) => onBlur(value)}
                  onChangeText={(value) => onChange(value)}
                />
                <Icon
                  style={styles.iconPassword}
                  name={hide ? "eye-off" : "eye"}
                  onPress={() => {
                    setHide(!hide);
                  }}
                  size={15}
                />
              </View>
            )}
            rules={{
              required: {
                value: true,
                message: (
                  <Text style={{ color: "red", marginBottom: 5 }}>
                    <Icon name="warning" size={15} /> Le mot de passe est
                    obligatoire
                  </Text>
                ),
              },
            }}
          />
  
          {errors.password && errors.password.message}
          <Text style={styles.text}>Confirmation du mot de passe</Text>
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, value, onBlur } }) => (
              <View style={styles.containerPassword}>
              <TextInput
                secureTextEntry={hide ? true : false}
                placeholder="Entrez votre mot de passe"
                value={value}
                onBlur={(value) => onBlur(value)}
                onChangeText={(value) => onChange(value)}
              />
              <Icon
                style={styles.iconPassword}
                name={hide ? "eye-off" : "eye"}
                onPress={() => {
                  setHide(!hide);
                }}
                size={20}
              />
            </View>
            )}
            rules={{
              required: {
                value: true,
                message: (
                  <Text style={{ color: "red", marginBottom: 20 }}>
                    <Icon name="warning" size={20} /> Le mot de passe est
                    obligatoire
                  </Text>
                ),
              },
              validate: (value) =>
                value === getValues("password") || (
                  <Text style={{ color: "red", marginBottom: 20 }}>
                    <Icon name="warning" size={20} />
                    Les mots de passe ne correspondent pas
                  </Text>
                ),
            }}
          />
          {errors.confirmPassword && errors.confirmPassword.message}
        </View>
        <TouchableOpacity
          style={styles.validationBtn}
          onPress={handleSubmit(onSubmit)}
          
        >
          <Text style={styles.validationText}>
            Suivant <Icon name="arrow-forward-sharp" size={20} />
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  export default SignInScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,

      alignItems: "center",
      justifyContent: "space-evenly",
      backgroundColor: "#efefef",
    },
    text: {
        marginTop:5,
      fontSize: 13,
      color: "#000",
      marginBottom: 10,
      
    },
  
    validationBtn: {
      borderRadius: 10,
      backgroundColor: "orange",
      paddingVertical: 15,
      paddingHorizontal: 60,
      marginBottom: -10,
     
      alignItems: "center",
    },
    validationText: {
      textTransform: "uppercase",
      color: "white",
      fontSize: 20,
    },
    img: {
      height: 100,
      width: 100,
    },
    input: {
      width: "90%",
      height: 40,
      borderWidth: 1,
      borderColor: "orange",
      borderRadius: 5,
      marginBottom: 10,
      padding: 10,
    },
    containerPassword: {
        width: "90%",
        height: 40,
      borderWidth: 1,
      borderColor: "orange",
      borderRadius: 5,
      padding: 10,
      
      flexDirection: "row",
      justifyContent: "space-between",
    },
    iconPassword: {
      paddingTop: 1,
    },
    form:{
        backgroundColor:"white",
            bottom:-70,
            height:350,
            width:"90%",
            alignItems:"center",
            borderRadius:15,
            left:5,
            shadowColor:"black",
            shadowOpacity:15,
    }
  });
  