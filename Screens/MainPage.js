import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as URL from "../const";
import Header from "../Header";

const MainPage = () => {
    const [dataLoding, finishLoading] = useState(true);
    let [data, SetData] = useState();

    useEffect(
        () => {
            fetch(URL.Solutions)
                .then((response) => response.json())
                .then((data) => SetData(data))
                .catch((error) => console.error(error))
                .finally(() => {
                    finishLoading(false);
                });
        },
        [
            //Vairble that changed the notice well be there and this metohd well run
        ]
    );

    const ItemPress = () => {};
    return (
        <View style={{ flex: 1 }}>
            <Header title="MainPage" />
            {dataLoding ? (
                <ActivityIndicator />
            ) : (
                <View>
                    <Text style={STY.container}>MainPage</Text>
                    <FlatList
                        style={STY.listStyle}
                        keyExtractor={(itemKey) => itemKey.id}
                        data={data}
                        renderItem={({ item }) => (
                            <TouchableOpacity activeOpacity={0.6} style={STY.card} onPress={() => ItemPress(item)}>
                                <View style={STY.container}>
                                    <Text style={STY.name}>{item.title}</Text>
                                    <Text style={STY.name}>{item.description}</Text>
                                    <Text style={STY.name}>{item.packageId}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
        </View>
    );
};

const STY = StyleSheet.create({
    listStyle: {
        flex: 1,
    },
    container: {
        flex: 1,
        display: "flex",

        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

    card: {
        backgroundColor: "#FFF",
        padding: 3,
        flex: 1,
        borderRadius: 5,
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 8,
        margin: 3,
        // border: " medium outset lightgray",
        //  boxShadow: "0 4px 8px 0 rgb(0,0,0,0.4)",
    },
});

export default MainPage;
