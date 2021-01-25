import React, { useState } from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {mainPageStyles} from '../config/Styles';

export const Ticket = ({title}) => {
    return (
        <View style={mainPageStyles.ticketFeedView}>
            <TouchableOpacity style={mainPageStyles.touchyBtn}>
                <Text >{title}</Text>
            </TouchableOpacity>
        </View>
    );
}
