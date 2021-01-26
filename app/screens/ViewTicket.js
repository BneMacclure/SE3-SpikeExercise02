import React, { useState } from "react";
import {Text, TouchableOpacity, View, TextInput} from "react-native";
import {viewTicketStyles} from '../config/Styles';
import {db, firebaseApp} from '../config/DatabaseConfig';

export const ViewTicket = ({navigation}) => {
    const closeTicket = () => navigation.navigate('Ticket Feed'); // ToDo: add in closing the ticket, and adding the answer
    // TODO: PUT IN THE FORM'S FIELDS
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [answer, setAnswer] = useState("");
    return (
        <View style={viewTicketStyles.container}>
            <View style={viewTicketStyles.inputView}>
                <TextInput
                    style={viewTicketStyles.TextInput}
                    fontSize="35"
                    onChangeText={(title) => setTitle(title)}
                    editable='false'
                />
            </View>

            <View style={viewTicketStyles.inputView}>
                <TextInput
                    style={viewTicketStyles.TextInput}
                    secureTextEntry={true}
                    onChangeText={(description) => setDescription(description)}
                    numberOfLines={10}
                    multiline={true}
                    editable='false'
                />
            </View>

            <View style={viewTicketStyles.inputView}>
                <TextInput
                    style={viewTicketStyles.TextInput}
                    placeholder="Enter answer here"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(answer) => setAnswer(answer)}
                    numberOfLines={10}
                    multiline={true}
                />
            </View>

            <TouchableOpacity style={viewTicketStyles.touchyBtn} onPress={closeTicket}>
                <Text>CLOSE TICKET</Text>
            </TouchableOpacity>
        </View>
    )
};