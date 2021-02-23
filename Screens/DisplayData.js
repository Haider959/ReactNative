import React from "react";
import { Text, View } from "react-native";
import Back from "../Headers/Back";
function DisplayData({ route, navigation }) {
    const item = route.params;
    return (
        <View>
            <Back title="DisplayData" navigation={navigation} target="ItemPage" />
            <Text>HI !!</Text>
            <Text style={{ justifyContent: "space-around", display: "flex" }}>{item.title}</Text>
            <Text style={{ justifyContent: "space-around", display: "flex" }}>{item.discription}</Text>
        </View>
    );
}

export default DisplayData;
