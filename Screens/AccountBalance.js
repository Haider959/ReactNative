import React, { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet, Button, Text, View, ActivityIndicator, FlatList, Dimensions, Touchable } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import * as URL from "../const.js";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Header from "../Header";
import * as Web from "../Web";

const screenSize = Dimensions.get("window");
let width = screenSize.width;
if (width > 450) width = 450;

const AccountBalance = ({ navigation }) => {
    const [dataLoding, finishLoading] = useState(false);
    const [Data, setData] = useState([]);
    const [listIndex, setListIndex] = useState(0);
    const [canLoadMore, setCanLoadMore] = useState(true);
    const pageSize = 20;
    const data = { companyId: 1, pageIndex: listIndex, pageSize: pageSize };

    useEffect(() => {
        const kk = { pageIndex: 0, pageSize: 20, companyId: 1, currencyId: 2 };
        navigation.navigate("DisplayData", kk);
        return;
        Web.Post(URL.AccountBalance, data)
            .then((response) => {
                setData(response.data);
                setListIndex(listIndex + pageSize);
                finishLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);
    const loadMore = () => {
        if (canLoadMore) {
            Web.Post(URL.AccountBalance, data)
                .then((response) => {
                    if (response.data.length < pageSize) setCanLoadMore(false);
                    else setListIndex(listIndex + pageSize);
                    setData([...Data, ...response.data]);
                })
                .catch((err) => console.log(err));
        }
    };

    const balanceDollarPress = () => {
        const data = { companyId: 3, currencyId: 1 };
        Web.Post(URL.AccountMovements, data).then((response) => {
            setOtherData(response.data);
        });
        setSwitch(true);
        console.log("$$$$$$$$$");
    };

    const balanceDinarPress = () => {
        const data = { pageIndex: 0, pageSize: 20, companyId: 1, currencyId: 2 };

        navigation.navigate("DisplayData", data);
        console.log("تاتتتتت");
    };

    return (
        <View>
            <Header title="AccountBalance" />
            {/* <Button title="load" onPress={loadMore} /> */}
            {dataLoding ? (
                <ActivityIndicator size="large" color="red" />
            ) : (
                <FlatList
                    style={cardStyle.container}
                    keyExtractor={(itemKey) => `${itemKey.id}`}
                    data={Data}
                    onEndReached={loadMore}
                    onEndReachedThreshold={3}
                    renderItem={({ item }) => (
                        <View style={cardStyle.Card}>
                            <View style={cardStyle.Card}>
                                <View style={cardStyle.horizontal}>
                                    <Text style={cardStyle.constText}>{item.accountName}</Text>
                                    <Ionicons name="person-circle-sharp" size={35} color="#258e7d" style={{ paddingRight: 15 }} />
                                </View>
                                <View style={[cardStyle.horizontal, { justifyContent: "space-around", flex: 1, width: "100%" }]}>
                                    <TouchableOpacity style={cardStyle.wido} onPress={balanceDollarPress}>
                                        <Text style={cardStyle.spends}>$ {item.balanceDollar}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={cardStyle.wido} onPress={balanceDinarPress}>
                                        <Text style={cardStyle.gaint}>{item.balanceDinar} د.ع</Text>
                                    </TouchableOpacity>
                                </View>
                                <View
                                    style={[
                                        cardStyle.horizontal,
                                        { justifyContent: "space-around", flex: 1, width: "100%", marginVertical: 10 },
                                    ]}>
                                    <CashState sty={cardStyle.modan} state={item.balanceStateDollar} />
                                    <CashState sty={cardStyle.maden} state={item.balanceStateDinar} />
                                </View>
                            </View>
                        </View>
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
        //   backgroundColor: "#e5e5e5",
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
        width: 60,
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
        width: 60,
    },

    Card: {
        flex: 1,
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        marginTop: 8,
        marginHorizontal: 8,
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

    gaint: {
        borderRadius: 5,
        padding: 5,
        margin: 3,
        backgroundColor: "#d9f1ef",
        textAlign: "center",
        color: "#258e7d",
        fontWeight: "bold",
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

export default AccountBalance;

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

// {
//     "companyId": 1,
//     "data": [
//       {
//         "id": 1,
//         "accountName": "حساب الفروقات",
//         "accountTypeId": 4,
//         "accountNumber": 3,
//         "phoneNumber": "07800000000",
//         "balanceDinar": 23,
//         "balanceDinarState": "دائن/علينا",
//         "balanceDollar": 40,
//         "balanceDollarState": "مدين/الينا"
//       }
//     ]
//   }
