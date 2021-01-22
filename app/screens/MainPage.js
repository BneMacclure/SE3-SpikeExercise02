import React, { useState } from "react";
import {ScrollView, Text, Button, TouchableOpacity, View} from "react-native";
import {mainPageStyles} from '../config/Styles';



export const MainPage = ({navigation}) => {

  const navToCreateTicket = () => {navigation.navigate('Create Ticket')};

    return (
      <View style={mainPageStyles.container}>
        <View style={{paddingTop: 50}}>
          <Text style={mainPageStyles.header}>TICKET FEED</Text>
        </View>
        <ScrollView contentContainerStyle={mainPageStyles.ticketFeedView}>
          <TouchableOpacity style={mainPageStyles.touchyBtn}>
            <Text>Example</Text>
          </TouchableOpacity>
          <TouchableOpacity style={mainPageStyles.touchyBtn}>
            <Text>Example</Text>
          </TouchableOpacity>
          <TouchableOpacity style={mainPageStyles.touchyBtn}>
            <Text>Example</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={{paddingBottom: 50, width: 250, alignItems: 'center'}}>
          <TouchableOpacity style={mainPageStyles.touchyBtn} onPress={navToCreateTicket}>
            <Text>Create a Ticket</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
}