import React, { useState } from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {mainPageStyles} from '../config/Styles';

const Ticket = () => {
    return (
        <TouchableOpacity style={mainPageStyles.touchyBtn}>
            <Text>Example Title</Text>
        </TouchableOpacity>
    );
}

export {Ticket}