import * as React from "react";
import { View, Text, Button } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import DrawerContent from "./DrawerContent";
import Header from "../Header";
import MainPage from "../Screens/MainPage";
import SecondItem from "../Screens/SecondItem";
import ItemPage from "../Screens/ItemPage";
import DisplayData from "../Screens/DisplayData";
import LoginPage from "../Screens/LoginPage";
import logo from "../Screens/logo";
function Notifications() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Nothing To See</Text>
        </View>
    );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator initialRouteName="ItemPage" drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="ItemPage" component={ItemPage} />
            <Drawer.Screen name="SecondItem" component={SecondItem} />
            <Drawer.Screen name="DisplayData" component={DisplayData} />
            <Drawer.Screen name="LoginPage" component={LoginPage} />
            <Drawer.Screen name="logo" component={logo} />
        </Drawer.Navigator>
    );
}

export default MyDrawer;
