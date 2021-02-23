import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigater from "./Navigater/DrawerNavigater";
import { Dimensions } from "react-native";
const ScreenSize = Dimensions.get("window");

export default function App() {
    return (
        <NavigationContainer>
            <DrawerNavigater />
        </NavigationContainer>
    );
}
