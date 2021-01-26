import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import {loginPageStyles} from '../config/Styles';
import * as firebase from 'firebase';

// React component representing my Login screen
export const LoginPage = ({navigation}) => {
    const [email, setEmail] = useState(""); // email for login
    const [password, setPassword] = useState(""); // password for login
    // Function for login. Uses firebase authentication
    const loginFunc = () => {
      // check if valid login
      firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('Ticket Feed'))
      .catch(error => Alert.alert(
          "Login",
          "Invalid login information",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        )
      )
    };
    
    return (
        <View style={loginPageStyles.container}>
        <Text style={loginPageStyles.header}>Ask-A-Prof</Text>
        <Image style={loginPageStyles.image} source={require("../assets/notepad.png")} />
  
        <StatusBar style="auto" />
        <View style={loginPageStyles.inputView}>
          <TextInput
            style={loginPageStyles.TextInput}
            placeholder="Enter email here"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
  
        <View style={loginPageStyles.inputView}>
          <TextInput
            style={loginPageStyles.TextInput}
            placeholder="Enter password here"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
  
        <TouchableOpacity style={loginPageStyles.loginBtn} onPress={loginFunc}>
          <Text style={loginPageStyles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
}