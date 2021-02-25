import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, Button, Text, View, ActivityIndicator, FlatList, Dimensions } from "react-native";
import * as URL from "../const.js";
import { AntDesign } from "@expo/vector-icons";
import * as Web from "../Web";
import Back from "../Headers/Back";
const DisplayData = ({ route, navigation }) => {
    const [otherData, setOtherData] = useState([]);
    const [dataLoding, finishLoading] = useState(false);
    const [listIndex, setListIndex] = useState(0);
    const [canLoadMore, setCanLoadMore] = useState(true);
    const pageSize = 20;
    const dataToGet = route.params;
    const hundleData = { pageIndex: listIndex, pageSize: pageSize, companyId: dataToGet.companyId, currencyId: dataToGet.currencyId };

    useEffect(() => {
        Web.Post(URL.AccountMovements, hundleData)
            .then((response) => {
                setOtherData(response.data);
                setListIndex(listIndex + pageSize);
                finishLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);

    const loadMore = () => {
        if (canLoadMore) {
            const hundleData = {
                pageIndex: listIndex,
                pageSize: pageSize,
                companyId: dataToGet.companyId,
                currencyId: dataToGet.currencyId,
            };

            Web.Post(URL.AccountMovements, hundleData)
                .then((response) => {
                    if (response.data.length < pageSize) setCanLoadMore(false);
                    else setListIndex(listIndex + pageSize);
                    setOtherData([...otherData, ...response.data]);
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <View>
            <Back title="DisplayData" navigation={navigation} />
            {dataLoding ? (
                <ActivityIndicator></ActivityIndicator>
            ) : (
                <FlatList
                    onEndReached={loadMore}
                    onEndReachedThreshold={1}
                    style={STY.listStyle}
                    keyExtractor={(itemKey) => `${itemKey.id}`}
                    data={otherData}
                    renderItem={({ item }) => (
                        <View style={STY.Card}>
                            <View style={STY.Labels}>
                                <Text style={STY.Lab}>نوع العملة</Text>
                                <Text>الرصيد</Text>
                                <Text>المبلغ</Text>
                            </View>
                            <View style={STY.Labels}>
                                <Text style={STY.Texts}>قبض بعملتين</Text>
                                <Text style={STY.Texts}>1,233,432 د.ع</Text>
                                <Text style={STY.TextsAmount}>1,323,435 د.ع</Text>
                            </View>
                        </View>
                    )}
                />
            )}
        </View>
    );
};
const STY = StyleSheet.create({
    listStyle: {
        //   backgroundColor: "#e5e5e5",
    },

    Labels: {
        flexDirection: "row-reverse",
        textAlign: "center",
        justifyContent: "space-around",
        paddingVertical: 5,
        alignContent: "center",
    },

    //     Lab:{
    // alignContent
    //     },

    Texts: {
        backgroundColor: "#e5e5e5",
        fontWeight: "bold",
        textAlign: "center",
        padding: 3,
        borderRadius: 5,
    },
    TextsAmount: {
        backgroundColor: "#d9f1ef",
        fontWeight: "bold",
        textAlign: "center",
        padding: 3,
        borderRadius: 5,
    },

    Card: {
        flex: 1,
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 5,
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#fff",
        marginTop: 8,
        marginHorizontal: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    expense: {
        borderRadius: 5,
        padding: 5,
        margin: 3,
        backgroundColor: "#fdeee7",
        color: "#b56a42",
        textAlign: "center",
    },

    sale: {
        borderRadius: 5,
        padding: 5,
        margin: 3,
        backgroundColor: "#e5e5e5",
        textAlign: "center",
        color: "black",
    },

    profit: {
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

export default DisplayData;
