import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {loginPageStyles} from '../config/Styles';


export const LoginPage = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navToMain = () => navigation.navigate('Ticket Feed');
    
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
  
        <TouchableOpacity style={loginPageStyles.loginBtn} onPress={navToMain}>
          <Text style={loginPageStyles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
}