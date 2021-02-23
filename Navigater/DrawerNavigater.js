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
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="ItemPage" component={ItemPage} />
            <Drawer.Screen name="SecondItem" component={SecondItem} />
            <Drawer.Screen name="DisplayData" component={DisplayData} />
        </Drawer.Navigator>
    );
}

export default MyDrawer;
