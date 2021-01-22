import React, { useState } from "react";
import {Text, TouchableOpacity, View, TextInput} from "react-native";
import {createTicketStyles} from '../config/Styles';



export const CreateTicket = ({navigation}) => {
    const submitTicket = () => navigation.navigate('Ticket Feed');
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <View style={createTicketStyles.container}>
            <View style={createTicketStyles.inputView}>
                <TextInput
                    style={createTicketStyles.TextInput}
                    fontSize="35"
                    placeholder="Enter title here"
                    placeholderTextColor="#003f5c"
                    onChangeText={(title) => setTitle(title)}
                />
            </View>
  
            <View style={createTicketStyles.inputView}>
                <TextInput
                    style={createTicketStyles.TextInput}
                    placeholder="Enter description here"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(description) => setDescription(description)}
                    numberOfLines={10}
                    multiline={true}
                />
            </View>

            <TouchableOpacity style={createTicketStyles.touchyBtn} onclick={submitTicket}>
                <Text>SUBMIT TICKET</Text>
            </TouchableOpacity>
        </View>
    )
};