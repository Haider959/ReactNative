import React from "react";
import { TouchableOpacity, StyleSheet, Button, Text, View, ActivityIndicator, FlatList, Dimensions } from "react-native";
import * as URL from "../const.js";
import { AntDesign } from "@expo/vector-icons";

import Back from "../Headers/Back";
function DisplayData({ route, navigation }) {
    const item = [route.params];
    console.log(item);
    return (
        <View>
            <Back title="DisplayData" navigation={navigation} />
            <FlatList
                style={styles.listStyle}
                keyExtractor={(itemKey) => itemKey.id.toString()}
                data={item}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.Card} onPress={() => {}}>
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
        </View>
    );
}
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

export default DisplayData;
