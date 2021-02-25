import React, { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet, Button, Text, View, ActivityIndicator, FlatList, Dimensions } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import * as URL from "../const.js";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Header from "../Header";
import * as Web from "../Web";

const Stack = createStackNavigator();
const screenSize = Dimensions.get("window");
let width = screenSize.width;
if (width > 450) width = 450;

const ItemList = ({ navigation }) => {
    const [dataLoding, finishLoading] = useState(true);

    let [newsData, SetData] = useState();
    useEffect(() => {
        const data = { companyId: 0, pageIndex: 0, pageSize: 5 };
        Web.Refrash();
        Web.Post(URL.SalesPerDay, data);
        finishLoading(false);
    }, []);

    const listItemPress = (item) => {
        navigation.navigate("DisplayData", item);
    };

    return (
        <View style={{ flex: 1 }}>
            <Header title="SecondItem" />
            {dataLoding ? (
                <ActivityIndicator size="large" color="red" />
            ) : (
                <FlatList
                    style={cardStyle.container}
                    keyExtractor={(itemKey) => itemKey.id}
                    data={newsData}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={cardStyle.Card} onPress={() => listItemPress(item)}>
                            <View style={cardStyle.Card}>
                                <View style={cardStyle.horizontal}>
                                    <Text style={cardStyle.constText}>زبون</Text>
                                    <Ionicons name="person-circle-sharp" size={30} color="#258e7d" />
                                </View>
                                <View style={[cardStyle.horizontal, { justifyContent: "space-around", flex: 1, width: "100%" }]}>
                                    <Text style={[cardStyle.spends, cardStyle.wido]}>$ {item.title}</Text>
                                    <Text style={[cardStyle.gaint, cardStyle.wido]}>{item.description}</Text>
                                </View>

                                <View
                                    style={[
                                        cardStyle.horizontal,
                                        { justifyContent: "space-around", flex: 1, width: "100%", marginVertical: 10 },
                                    ]}>
                                    <CashState sty={cardStyle.modan} state=" " />
                                    <CashState sty={cardStyle.maden} state="مدين/ لنا" />
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
};

const CashState = ({ state, sty }) => {
    return (
        <View style={cardStyle.horizontal}>
            <Text style={sty}>{state}</Text>
            <View>
                <Text style={cardStyle.cash}>حالة</Text>
                <Text style={cardStyle.cash}>الرصيد</Text>
            </View>
        </View>
    );
};
const cardStyle = StyleSheet.create({
    container: {
        backgroundColor: "#e5e5e5",
    },
    horizontal: {
        flexDirection: "row",
        alignSelf: "flex-end",
        justifyContent: "center",
    },

    wido: {
        width: "40%",
    },

    cash: {
        fontSize: 11,
        alignSelf: "center",
        textAlign: "center",
    },

    maden: {
        borderRadius: 5,
        backgroundColor: "green",
        textAlign: "center",
        color: "white",
        alignSelf: "center",
        height: "50%",
        fontSize: 10,
        padding: 3,
        marginRight: 5,
        width: 50,
    },

    modan: {
        borderRadius: 5,
        backgroundColor: "red",
        color: "white",
        textAlign: "center",
        alignSelf: "center",
        height: "50%",
        //   width: "15%",
        fontSize: 10,
        padding: 3,
        marginRight: 5,
        width: 50,
    },

    Card: {
        flex: 1,
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        marginTop: 8,
        marginHorizontal: 5,
        justifyContent: "flex-end",

        //   boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    },

    spends: {
        borderRadius: 5,
        padding: 5,
        margin: 3,
        backgroundColor: "pink",
        color: "red",
        textAlign: "center",
        fontWeight: "bold",
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

    groped: {},

    constText: {
        textAlign: "center",
        backgroundColor: "white",
        margin: 5,
        marginRight: 10,
        fontWeight: "bold",
    },
    constDate: {
        minWidth: 140,
        textAlign: "left",
        backgroundColor: "white",
        margin: 5,
    },
});

export default ItemList;

// useEffect(() => {
//     fetch(URL.Solutions)
//         .then((response) => response.json())
//         .then((data) => SetData(data))
//         .catch((error) => console.error(error))
//         .finally(() => {
//             finishLoading(false);
//         });
// }, []);

// function ChosenItem({ route, navigation }) {
//     const item = route.params;
//     return (
//         <View>
//             <Text style={{ justifyContent: "space-around", display: "flex" }}>{item.name}</Text>
//         </View>
//     );
// }
