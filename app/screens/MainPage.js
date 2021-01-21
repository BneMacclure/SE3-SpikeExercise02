import React, { useState } from "react";
import {View, Text, Button} from "react-native";

export const MainPage = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <Button title="Create a ticket" />
          ),
        });
      }, [navigation]);
    return (
        <View>
            <Text>This is blank</Text>
        </View>
    )
}

