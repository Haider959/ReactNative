import React, { useState } from "react";
import { View, StyleSheet, Image, Button } from "react-native";
import { useTheme, avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";

import { AntDesign, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import Dialog from "react-native-dialog";
export default function DrawerContents(props) {
    const [selectedValue, setSelectedValue] = useState("Tesla");
    const [Choseer] = useState(
        [
            { name: "Tesla", id: 0 },
            { name: "OWl", id: 1 },
            { name: "Ghon", id: 2 },
            { name: "Picaso", id: 3 },
        ].sort()
    );
    let items;
    const [visible, setVisible] = useState(false);
    const showDialog = () => {
        setVisible(true);
    };
    function DialogView() {
        const handleCancel = () => {
            setVisible(false);
        };

        const handleDelete = () => {
            setVisible(false);
        };

        return (
            <View style={styles.container}>
                {/* <Button title="Yas" onPress={showDialog} /> */}
                <Dialog.Container visible={visible}>
                    <Dialog.Title>Are You Sure</Dialog.Title>
                    <Dialog.Description> LOL !!</Dialog.Description>
                    <Dialog.Button label="No" onPress={handleCancel} />
                    <Dialog.Button label="Nop" onPress={handleDelete} />
                </Dialog.Container>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <DialogView />
                <View style={STY.drawerContent}>
                    <View style={STY.avatar}>
                        <Image
                            style={{ width: 100, height: 100, marginTop: 20 }}
                            source={{ uri: "https://cdn.icon-icons.com/icons2/1465/PNG/512/154manofficeworker2_100459.png" }}
                        />
                        <Text style={STY.ownerName}>demo</Text>
                    </View>

                    <DropDownPicker
                        style={STY.picker}
                        items={[
                            { label: "Company One", value: "one", icon: () => <Icon name="home" size={18} color="#900" /> },
                            { label: "Company Tow", value: "tow", icon: () => <Icon name="menu" size={18} color="#900" /> },
                            { label: "France", value: "france", icon: () => <Icon name="flag" size={18} color="#900" />, hidden: true },
                        ]}
                        defaultValue="one"
                        containerStyle={{ height: 40, margin: 10 }}
                        itemStyle={{
                            justifyContent: "flex-start",
                        }}
                        dropDownStyle={{ backgroundColor: "#fafafa" }}
                        onChangeItem={(item) => console.log(item)}
                    />

                    <DrawerItem
                        style={STY.drawerItem}
                        icon={({ color, size }) => <FontAwesome5 name={"creative-commons-share"} size={size} color={color} />}
                        label="الملخص اليومي"
                        onPress={() => {
                            props.navigation.navigate("ItemPage");
                        }}
                    />

                    <DrawerItem
                        style={STY.drawerItem}
                        icon={({ color, size }) => <AntDesign name={"customerservice"} size={size} color={color} />}
                        label="ارصدة الحسابات"
                        onPress={() => {
                            props.navigation.navigate("SecondItem");
                        }}
                    />
                    {/* <Drawer.Section title="Preferences"></Drawer.Section> */}
                </View>
            </DrawerContentScrollView>
            <Drawer.Section>
                <DrawerItem
                    style={STY.signOut}
                    icon={({ color, size }) => <FontAwesome name="sign-out" color={"red"} size={size} />}
                    labelStyle={{ color: "red" }}
                    label="Sign Out"
                    onPress={
                        showDialog
                        //         signOut();
                    }
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    dialogContainer: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

const STY = StyleSheet.create({
    drawerContent: {
        //  backgroundColor: "#ededed",
        flex: 1,
        display: "flex",
        justifyContent: "space-evenly",
    },
    avatar: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    ownerName: {
        paddingTop: 5,
    },
    drawerSection: {},
    picker: {
        backgroundColor: "#fafafa",
    },
    drawerItem: {
        backgroundColor: "lightcyan",
        display: "flex",
        flexDirection: "column",
        flex: 1,
        justifyContent: "flex-end",
    },
    signOut: {
        backgroundColor: "pink",
    },
});
