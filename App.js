import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigater from "./Navigater/DrawerNavigater";
import { Dimensions } from "react-native";
import MainLoginPage from "./MainLoginPage";
import MainPage from "./Screens/MainPage";
const ScreenSize = Dimensions.get("window");

export default function App() {
    return <MainLoginPage />;
}
