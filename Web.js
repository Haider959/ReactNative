import React, { useState } from "react";
import axios from "axios";
import * as StoreData from "./StoreData";
import * as URL from "./const";
const Web = () => {};
const Authorization = "Authorization";
export const Get = async (Url) => {
    return axios({
        method: "GET",
        url: Url,
        headers: {
            "Content-Type": URL.Application,
        },
    })
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.error(err);
            return "Faild";
        });
};
export const Post = async (Url, data) => {
    return axios({
        method: "POST",
        url: Url,
        data: JSON.stringify(data),
        headers: {
            "Content-Type": URL.Application,
        },
    })
        .then((response) => {
            return response;
        })
        .catch((err) => console.error(err));
};

export const Login = async (Url, data) => {
    return axios({
        method: "POST",
        url: Url,
        data: JSON.stringify(data),
        headers: {
            "Content-Type": URL.Application,
        },
    })
        .then((response) => {
            const token = response.data.token;
            axios.defaults.headers.common[Authorization] = `Bearer ${token}`;
            StoreData.storeData("token", token);
            return true;
        })
        .catch((err) => {
            console.error(err);
            return false;
        });
};

export const Refrash = () => {
    return StoreData.getData("token").then((token) => {
        axios.defaults.headers.common[Authorization] = `Bearer ${token}`;
        // I("!!! Refrashed !!!", "g");
        // I(token);
        if (token.length > 10) return true;
        return true;
    });
};

const I = (obj, color) => {
    if (color == "g") console.log(`%c ${obj}`, "background-color: #00EBA2 ; color: #000000 ; font-weight: bold ; padding: 1px ;");
    else if (color == "I") console.log(`%c ${obj}`, "background-color: #F0BD07 ; color: #000000 ; font-weight: bold ; padding: 1px ;");
    else console.log(`%c ${obj}`, "background-color: #e0005a ; color: #ffffff ; font-weight: bold ; padding: 1px ;");
};

// export const FPost = (Url, data) => {
//     fetch(Url, {
//         method: "POST",
//         headers: {
//             Accept: "application/json",
//             "Content-Type": URL.Application,
//         },
//         body: JSON.stringify(data),
//         // { firstParam: "yourValue",
//         // secondParam: "yourOtherValue",}
//     });
// };

// export const FPost = (Url, data) => {
//     return fetch(Url)
//         .then((response) => response.json())
//         .then((json) => {
//             return json;
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// };
