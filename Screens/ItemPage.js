import React, { useEffect, useState } from "react";
import { TouchableWithoutFeedback, StyleSheet, Button, Text, View, ActivityIndicator, FlatList, Dimensions } from "react-native";
import * as URL from "../const.js";
import { AntDesign } from "@expo/vector-icons";
import Header from "../Header";
import * as Web from "../Web";
import * as Generation from "../Generation";
import Moment from "moment";
const ItemList = ({ navigation }) => {
    const [dataLoding, finishLoading] = useState(true);
    const [accounts, setAcounts] = useState([]);
    const data = { companyId: 1, pageIndex: 0, pageSize: 20 };
    const [listIndex, setListIndex] = useState(21);
    const [Switch, setSwitch] = useState(false);
    useEffect(() => {
        Switch
            ? setTimeout(() => {
                  setAcounts(Generation.Add(20));
                  finishLoading(true);
              }, 20)
            : setTimeout(() => {
                  Web.Post(URL.SalesPerDay, data)
                      .then((response) => {
                          setAcounts(response.data);
                          finishLoading(false);
                      })
                      .catch((err) => console.log(err));
              }, 20);
    }, [Switch]);

    const listItemPress = (item) => {
        navigation.navigate("DisplayData", item);
    };
    const loadMore = () => {
        setListIndex(listIndex + 21);
        const data = { companyId: 1, pageIndex: listIndex, pageSize: 20 };
        if (listIndex < 110)
            setTimeout(() => {
                Web.Post(URL.SalesPerDay, data)
                    .then((response) => {
                        setAcounts([...accounts, ...response.data]);
                        //   finishLoading(false);
                    })
                    .catch((err) => console.log(err));
            }, 20);
    };

    const formatDateTime = (dt) => {
        return Moment(dt).format("yyyy-MM-DD HH:mm");
    };

    return (
        <View>
            <Header title="ItemPage" />
            {/* <Button title="load" onPress={loadMore} /> */}
            {dataLoding ? (
                <ActivityIndicator size="large" color="red" />
            ) : (
                <FlatList
                    style={styles.listStyle}
                    keyExtractor={(itemKey) => `${itemKey.id}`}
                    data={accounts}
                    onEndReached={loadMore}
                    onEndReachedThreshold={1}
                    renderItem={({ item }) => (
                        <TouchableWithoutFeedback onPress={() => listItemPress(item)}>
                            <View style={styles.Card}>
                                <View>
                                    <View style={styles.groped}>
                                        <Text style={styles.constText}>المصاريف</Text>
                                        <Text style={styles.expense}>{item.expense1} د.ع</Text>
                                        <Text style={styles.expense}>$ {item.expense2}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", margin: 5 }}>
                                        <Text style={styles.constDate}>{formatDateTime(item.date)}</Text>
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
                                        <Text style={styles.sale}>{item.sale1} د.ع</Text>
                                        <Text style={styles.sale}>$ {item.sale2}</Text>
                                        <Text style={styles.constText}>الارباح</Text>
                                        <Text style={styles.profit}>{item.profit1} د.ع</Text>
                                        <Text style={styles.profit}>$ {item.profit2}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
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

export default ItemList;
// const StackHeader = () => {
//     return {
//         headerLeft: (props) => <HumbergerMenu {...props} />,
//         headerTitle: "1",
//         placement: "right",
//     };
// };
const I = (obj, color = "r") => {
    if (color == "g") console.log(`%c- ${obj}`, "background-color: #00EBA2 ; color: #000000 ; font-weight: bold ; padding: 1px ;");
    else if (color == "i") console.log(`%c- ${obj}`, "background-color: #F0BD07 ; color: #000000 ; font-weight: bold ; padding: 1px ;");
    else if (color == "r") console.log(`%c- ${obj}`, "background-color: #e0005a ; color: #ffffff ; font-weight: bold ; padding: 1px ;");
};
