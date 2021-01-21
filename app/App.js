import 'react-native-gesture-handler';
import React, { useState } from "react";
import {LoginPage} from './screens/LoginPage';
import {MainPage} from './screens/MainPage';
import { NavigationContainer } from '@react-navigation/native';
import {
  StyleSheet,
} from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';


 
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="LoginPage">
        <Drawer.Screen 
          name="Login" 
          component={LoginPage}  />
        <Drawer.Screen name="Ticket Feed" component={MainPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#696969",
  },});

export default App;