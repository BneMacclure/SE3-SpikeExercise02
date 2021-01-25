import React, { useState } from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {mainPageStyles} from '../config/Styles';

const Ticket = (title) => {
    return (
        <TouchableOpacity style={mainPageStyles.touchyBtn}>
            <Text >{title}</Text>
        </TouchableOpacity>
    );
}

export {Ticket}