import AsyncStorage from "@react-native-community/async-storage";

export const storeData = async (key, data) => {
    try {
        await AsyncStorage.setItem(key, data);
    } catch (error) {
        console.log(error);
    }
};

export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (isNaN(value)) return value;
    } catch (error) {
        return error;
    }
    return "Not Found";
};
