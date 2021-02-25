import React, { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet, Button, Text, View, ActivityIndicator, FlatList, Dimensions } from "react-native";
import * as URL from "../const.js";
import { AntDesign } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../Header";
import * as Web from "../Web";
import * as Generation from "../Generation";
const Stack = createStackNavigator();
const screenSize = Dimensions.get("window");
let width = screenSize.width;
if (width > 450) width = 450;

const ItemList = ({ navigation }) => {
    const [dataLoding, finishLoading] = useState(false);
    const [accounts, setAcounts] = useState([]);
    //  const data = { name: "owl", logName: "3", password: "3", companies: "1" };
    const data = { companyId: 1, pageIndex: 0, pageSize: 2 };
    useEffect(() => {
        setTimeout(() => {
            setAcounts(Generation.Add(20));
        }, 20);
        // console.log(accounts);
        //     Web.Post(URL.SalesPerDay, data)
        //         .then((_data) => {
        //             //    setAcounts(_data.data);
        //             // console.log(_data.data);
        //             finishLoading(false);
        //         })
        //         .catch((err) => console.log(err));
    }, []);

    const listItemPress = (item) => {
        navigation.navigate("DisplayData", item);
    };
    const endReched = () => {
        console.log("LOLOLOLOLOLOLOLOLO");
    };
    return (
        <View>
            <Header title="ItemPage" />

            {dataLoding ? (
                <ActivityIndicator size="large" color="red" />
            ) : (
                <FlatList
                    numColumns
                    style={styles.listStyle}
                    keyExtractor={(itemKey) => itemKey.id.toString()}
                    data={accounts}
                    onEndReached={endReched}
                    onEndReachedThreshold={0}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.Card} onPress={() => listItemPress(item)}>
                            <View>
                                <View style={styles.groped}>
                                    <Text style={styles.constText}>المصاريف</Text>
                                    <Text style={styles.expense}>{item.expense1} د.ع</Text>
                                    <Text style={styles.expense}>$ {item.expense2}</Text>
                                </View>
                                <View style={{ flexDirection: "row", margin: 5 }}>
                                    <Text style={styles.constDate}>{item.date}</Text>
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
