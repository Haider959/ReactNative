import React, { useState } from "react";
import axios from "axios";
import { Button, Dimensions, StyleSheet, Text, TextInput, View, FlatList, ScrollView, TouchableOpacity } from "react-native";
import * as URL from "../const.js";
import { useNavigation, DrawerActions } from "@react-navigation/native";

import Header from "../Header";
const LoginPage = () => {
    const loginClick = () => {
        const loginRequest = { logName, password };
        //   console.log(loginRequest);
        sendData(URL.Login, loginRequest);
    };
    function sendData(Url, data) {
        return axios({
            method: "POST",
            url: URL.Login,
            data: JSON.stringify(data),
            headers: {
                "Content-Type": URL.Application,
            },
        })
            .then((response) => {
                console.log(response.data.token);
                const token = response.data.token;
                axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                localStorage.setItem("token", token);
            })
            .catch((err) => console.error(err));
    }

    const getJson = () => {
        axios({
            method: "GET",
            url: URL.Solutions,
            headers: {
                "Content-Type": URL.Application,
            },
        })
            .then((response) => this.setState((this.owners = response.data)))
            .catch((err) => console.error(err));
    };

    const [logName, setLogName] = useState("1");
    const [password, setPassword] = useState("1");

    return (
        <View>
            <Header title="Login Page" />

            <View style={styles.MAinView}>
                <View style={styles.horizontal}>
                    <TextInput defaultValue={logName} onChangeText={(text) => setLogName(text)} style={styles.itemText2} />
                    <Text style={styles.itemText}>الاسم</Text>
                </View>

                <View style={styles.horizontal}>
                    <TextInput defaultValue={password} onChangeText={(text) => setPassword({ text })} style={styles.itemText2} />
                    <Text style={styles.itemText}>الرمز</Text>
                </View>
                <Button maxWidth="10" color="red" title="login" onPress={loginClick} />
            </View>
        </View>
    );
};

export default LoginPage;

const styles = StyleSheet.create({
    listStyle: {
        alignSelf: "center",
        maxHeight: 600,
        backgroundColor: "#ff8af7",
        borderWidth: 3,
        borderColor: "#70004f",
    },
    Card: {
        fontSize: 20,
        minWidth: 120,
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        margin: 10,
        borderColor: "#fff",
        backgroundColor: "#fff",
        color: "#300022",
    },

    itemText: {
        fontSize: 20,
        minWidth: 90,
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        margin: 10,
        borderColor: "#fff",
        backgroundColor: "#ffbdec",
        color: "#300022",
        textAlign: "right",
    },

    itemText2: {
        fontSize: 20,
        minWidth: 90,
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        margin: 10,
        borderColor: "#fff",
        backgroundColor: "#fff",
        color: "#300022",
        textAlign: "left",
    },

    horizontal: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#ccc",
        alignSelf: "center",
    },
    MAinView: {
        margin: 20,
    },

    Button: {
        backgroundColor: "red",
    },
});
