import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import * as Web from "./.././../Web";
import * as URL from "./.././../const";
const LoginScreen = ({ navigation }) => {
    const [logName, setEmail] = useState({ value: "3", error: "" });
    const [password, setPassword] = useState({ value: "3", error: "" });

    const onLoginPressed = () => {
        const emailError = emailValidator(logName.value);
        const passwordError = passwordValidator(password.value);
        if (emailError || passwordError) {
            setEmail({ ...logName, error: emailError });
            setPassword({ ...password, error: passwordError });
            return;
        }

        const loginRequest = { logName: logName.value, password: password.value };

        Web.Login(URL.Login, loginRequest)
            .then((token) => {
                if (true) {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: "MainPage" }],
                    });
                }
                //Navigation.navigate("ItemPage");
            })
            .catch((err) => console.log(err));
    };

    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
            <Logo />
            <Header>Login Demo</Header>
            <TextInput
                label="Email"
                returnKeyType="next"
                value={logName.value}
                onChangeText={(text) => setEmail({ value: text, error: "" })}
                error={!!logName.error}
                errorText={logName.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />
            <TextInput
                label="Password"
                returnKeyType="done"
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: "" })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />
            {/* <View style={styles.forgotPassword}>
                <TouchableOpacity onPress={() => navigation.navigate("ForgotPasswordScreen")}>
                    <Text style={styles.forgot}>Forgot your password?</Text>
                </TouchableOpacity>
            </View> */}
            <Button mode="contained" onPress={onLoginPressed}>
                Login
            </Button>
            <View style={styles.row}>
                <Text>Don’t have an account? </Text>
                <TouchableOpacity onPress={() => navigation.replace("RegisterScreen")}>
                    <Text style={styles.link}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </Background>
    );
};

const styles = StyleSheet.create({
    forgotPassword: {
        width: "100%",
        alignItems: "flex-end",
        marginBottom: 24,
    },
    row: {
        flexDirection: "row",
        marginTop: 4,
    },
    forgot: {
        fontSize: 13,
        color: theme.colors.secondary,
    },
    link: {
        fontWeight: "bold",
        color: theme.colors.primary,
    },
});

export default LoginScreen;
