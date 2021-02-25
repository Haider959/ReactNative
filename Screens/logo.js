import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as URL from "../const";
import * as Web from "../Web";
export default function logo() {
    const [logName, setlogName] = useState("");
    const [password, setPassword] = useState("");
    const [LoginError, setLoginError] = useState("");
    const Navigation = useNavigation();
    const loginClick = () => {
        console.log(URL.Login, { logName, password });
        Web.Login(URL.Login, { logName, password })
            .then((token) => {
                setLoginError(token);
                if (token) Navigation.navigate("ItemPage");
                else setLoginError("Incorrect Password or Emaile");
            })
            .catch((err) => setLoginError(err));
    };
    //loginClick();

    return (
        <View style={styles.container}>
            <Text style={styles.forgot_button}>{LoginError}</Text>
            <Image
                style={{ width: 100, height: 100, marginTop: 20 }}
                source={{ uri: "https://cdn.icon-icons.com/icons2/1465/PNG/512/154manofficeworker2_100459.png" }}
            />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="logName."
                    placeholderTextColor="#003f5c"
                    onChangeText={(logName) => setlogName(logName)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={loginClick}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginBottom: 40,
    },

    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,

        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
    },
});
