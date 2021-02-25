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
    const data = { companyId: 1, pageIndex: listIndex, pageSize: 2 };
    const [listIndex, setListIndex] = useState(0);

    useEffect(() => {
        const Switch = true;
        Switch
            ? setTimeout(() => {
                  setAcounts(Generation.Add(20));
              }, 20)
            : Web.Post(URL.SalesPerDay, data)
                  .then((_data) => {
                      setAcounts(_data.data);
                      finishLoading(false);
                  })
                  .catch((err) => console.log(err));
    }, []);

    const listItemPress = (item) => {
        navigation.navigate("DisplayData", item);
    };
    const endReched = () => {
        I("End Reached", "g");
        //   let acco = accounts;
        //   acco.push();
        //  setAcounts(accounts + Generation.Add(20));
        //  console.log(accounts);
        setListIndex(listIndex + 10);
        I(listIndex);
    };

    return (
        <View>
            <Header title="ItemPage" />
            <Button title="load" onPress={endReched} />
            {dataLoding ? (
                <ActivityIndicator size="large" color="red" />
            ) : (
                <FlatList
                    numColumns
                    style={styles.listStyle}
                    keyExtractor={(itemKey) => `${itemKey.id}`}
                    data={accounts}
                    //   onEndReached={endReched}
                    //   onEndReachedThreshold={1}
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
const I = (obj, color = "r") => {
    if (color == "g") console.log(`%c- ${obj}`, "background-color: #00EBA2 ; color: #000000 ; font-weight: bold ; padding: 1px ;");
    else if (color == "i") console.log(`%c- ${obj}`, "background-color: #F0BD07 ; color: #000000 ; font-weight: bold ; padding: 1px ;");
    else if (color == "r") console.log(`%c- ${obj}`, "background-color: #e0005a ; color: #ffffff ; font-weight: bold ; padding: 1px ;");
};
