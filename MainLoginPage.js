import React from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./src/core/theme";
import { StartScreen, LoginScreen, RegisterScreen, ForgotPasswordScreen, Dashboard } from "./src/screens";
import DrawerNavigater from "./Navigater/DrawerNavigater";

const Stack = createStackNavigator();

const MainLoginPage = () => {
    return (
        <Provider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="MainPage"
                    screenOptions={{
                        headerShown: false,
                    }}>
                    <Stack.Screen name="StartScreen" component={StartScreen} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                    <Stack.Screen name="MainPage" component={DrawerNavigater} />
                    <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default MainLoginPage;
