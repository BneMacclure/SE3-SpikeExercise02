import React, { useState } from "react";
import {Text, TouchableOpacity, View, TextInput} from "react-native";
import {createTicketStyles} from '../config/Styles';
import {db, firebaseApp} from '../config/DatabaseConfig';



export const CreateTicket = ({navigation}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [answer, setAnswer] = useState("");
    const submitTicket = () => {
        db.ref('/tickets').push({
            title: {title},
            description: {description},
            answer: {answer}
        }).then(() => console.log('Data sent'));
        
        navigation.navigate('Ticket Feed');
    }

    
    

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

            <TouchableOpacity style={createTicketStyles.touchyBtn} onPress={submitTicket}>
                <Text>SUBMIT TICKET</Text>
            </TouchableOpacity>
        </View>
    )
};