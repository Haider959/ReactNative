import React, { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet, Button, Text, View, ActivityIndicator, FlatList, Dimensions } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import * as URL from "../const.js";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import axios from "axios";
import Header from "../Header";

const Stack = createStackNavigator();
const screenSize = Dimensions.get("window");
let width = screenSize.width;
if (width > 450) width = 450;

const ItemList = ({ navigation }) => {
    const [dataLoding, finishLoading] = useState(true);
    const [Acounts, setAcounts] = useState();
    let [newsData, SetData] = useState();

    useEffect(() => {
        axios({
            method: "GET",
            url: URL.GetAccount,
            headers: {
                "Content-Type": URL.Application,
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((response) => setAcounts(response.data))
            .catch((err) => console.error(err));
    }, []);

    const listItemPress = (item) => {
        navigation.navigate("DisplayData", item);
    };

    return (
        <View style={{ flex: 1 }}>
            <Header title="ItemPage" />
            {dataLoding ? (
                <ActivityIndicator size="large" color="red" />
            ) : (
                <FlatList
                    numColumns
                    style={[styles.listStyle, { flex: 1 }]}
                    keyExtractor={(itemKey) => itemKey.id}
                    data={newsData}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.Card} onPress={() => listItemPress(item)}>
                            <View>
                                <View style={styles.groped}>
                                    <Text style={styles.constText}>المصاريف</Text>
                                    <Text style={styles.spends}>{item.name} د.ع</Text>
                                    <Text style={styles.spends}>$ {item.mainId}</Text>
                                </View>
                                <View style={{ flexDirection: "row", margin: 5 }}>
                                    <Text style={styles.constDate}>2021-02-14</Text>
                                    <AntDesign name="calendar" size={20} color="gray" />
                                </View>
                            </View>
                            <View
                                style={{
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}>
                                <View style={styles.groped}>
                                    <Text style={styles.constText}>المبيعات والارجعات</Text>
                                    <Text style={styles.sailse}>{item.name} د.ع</Text>
                                    <Text style={styles.sailse}>$ {item.mainId}</Text>
                                    <Text style={styles.constText}>الارباح</Text>
                                    <Text style={styles.gaint}>{item.name} د.ع</Text>
                                    <Text style={styles.gaint}>$ {item.accountId}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    listStyle: {
        //   backgroundColor: "#e5e5e5",
    },
    Card: {
        flex: 1,
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 5,
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "#fff",
        marginTop: 8,
        margin: 5,
    },

    spends: {
        borderRadius: 5,
        padding: 5,
        margin: 3,
        backgroundColor: "#fdeee7",
        color: "#b56a42",
        textAlign: "center",
    },

    sailse: {
        borderRadius: 5,
        padding: 5,
        margin: 3,
        backgroundColor: "#e5e5e5",
        textAlign: "center",
        color: "black",
    },

    gaint: {
        borderRadius: 5,
        padding: 5,
        margin: 3,
        backgroundColor: "#d9f1ef",
        textAlign: "center",
        color: "#258e7d",
    },

    groped: {
        flex: 1,
    },

    constText: {
        minWidth: 140,
        textAlign: "center",
        backgroundColor: "white",
        margin: 5,
        marginRight: 10,
    },
    constDate: {
        textAlign: "left",
        backgroundColor: "white",
        paddingRight: 5,
    },
});

export default ItemList;
// const StackHeader = () => {
//     return {
//         headerLeft: (props) => <HumbergerMenu {...props} />,
//         headerTitle: "1",
//         placement: "right",
//     };
// };
