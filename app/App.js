import 'react-native-gesture-handler';
import React, { useState } from "react";
import {LoginPage} from './screens/LoginPage';
import {MainPage} from './screens/MainPage';
import {CreateTicket} from './screens/CreateTicket';
import {ViewTicket} from './screens/ViewTicket';
import { NavigationContainer } from '@react-navigation/native';
import {
  StyleSheet,
} from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';


 
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen 
          name="Ticket Feed" 
          component={MainPage} />
        <Drawer.Screen 
          name="Create Ticket"
          component={CreateTicket}/>
        <Drawer.Screen 
          name="View Ticket"
          component={ViewTicket}
          options={{
            drawerLabel: () => null,
            title: null,
            drawerIcon: () => null
        }}  />
        <Drawer.Screen 
          name="Login" 
          component={LoginPage}
          options={{
            drawerLabel: () => null,
            title: null,
            drawerIcon: () => null
          }}  />
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