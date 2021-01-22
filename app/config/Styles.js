import React, { useState } from "react";
import {StyleSheet} from "react-native";

/**
 * Stlying for the MainPage
 */
const mainPageStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#696969",
      alignItems: "center",
      justifyContent: "center"
    },

    ticketFeedView: {
      paddingTop: 100,
      width: 400,
      alignItems: "center",
      justifyContent: "center",
    },

    header: {
      fontSize: 65,
      color: '#2196f3',
    },
    
    touchyBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#2196f3",
    },
});

/**
 * Styling for the CreateTicket screen
 */
const createTicketStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#696969"
    },

    touchyBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#2196f3",
    },

    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      color: '#2196f3',
      justifyContent: "flex-start",
    },

    inputView: {
      backgroundColor: "#a9a9a9",
      borderRadius: 30,
      width: "80%",
      height: 100,
      marginBottom: 40,
      alignItems: "flex-start",
    },

});

/**
 * Styling for the ViewTicket screen
 */
const viewTicketStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#696969"
    },
});

/**
 * Styling for the LoginPage
 */
const loginPageStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#696969"
    },
  
    header: {
      fontSize: 65,
      color: '#2196f3'
    },
  
    textColor: {
      color: '#2196f3',
    },
   
    image: {
      marginBottom: 40,
      height: 200,
      width: 200
    },
  
    inputView: {
      backgroundColor: "#a9a9a9",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
  
    backgroundImage: {
      flex: 1,
      width: null,
      height: null,
      alignSelf: 'stretch'
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      color: '#2196f3',
    },
   
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#2196f3",
    },
  });
  
export {loginPageStyles, mainPageStyles, viewTicketStyles, createTicketStyles}
