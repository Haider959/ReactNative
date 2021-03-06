import * as React from "react";
import { Appbar } from "react-native-paper";
import { TouchableOpacity, Text } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";

const DrawerController = (Navigation) => {
    return Navigation.goBack();
};
const Back = ({ title, navigation, icon = "arrow-forward" }) => {
    return (
        <Appbar.Header
            style={{ display: "flex", width: "100%", justifyContent: "flex-end", flexDirection: "row", backgroundColor: "#fafaf9" }}>
            <Text style={{ fontSize: 18, alignSelf: "center" }}>{title}</Text>
            <TouchableOpacity onPress={() => DrawerController(navigation)}>
                {/* <AntDesign name="rightcircleo" size={30} color="#020204" style={{ marginHorizontal: 15 }} /> */}
                <Ionicons name={icon} size={30} color="#020204" style={{ marginHorizontal: 15 }} />
            </TouchableOpacity>
        </Appbar.Header>
    );
};
export default Back;
