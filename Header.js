import * as React from "react";
import { Appbar } from "react-native-paper";
import { TouchableOpacity, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";

const DrawerController = (Navigation) => {
    return Navigation.dispatch(DrawerActions.toggleDrawer());
};
const Header = ({ title, icon = "menuunfold" }) => {
    const Navigation = useNavigation();
    return (
        <Appbar.Header style={{ backgroundColor: "#fafaf9" }}>
            <View style={{ display: "flex", width: "100%", justifyContent: "flex-end", flexDirection: "row" }}>
                <Text style={{ fontSize: 18, alignSelf: "center" }}>{title}</Text>
                <TouchableOpacity onPress={() => DrawerController(Navigation)}>
                    <AntDesign name={icon} size={30} color="#020204" style={{ marginHorizontal: 15 }} />
                </TouchableOpacity>
            </View>
        </Appbar.Header>
    );
};
export default Header;
