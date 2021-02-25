import React, { useState } from "react";
import axios from "axios";
import * as StoreData from "./StoreData";
import * as URL from "./const";
const Web = () => {};

export const Get = async (Url) => {
    //StoreData.getData("token").then((token) => console.log(token));

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
let token;
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
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            StoreData.storeData("token", token);
            return true;
        })
        .catch((err) => {
            console.error(err);
            return false;
        });
};

export const Refrash = () => {
    StoreData.getData("token").then((token) => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        console.log("Refrashed !!!" + token);
    });
};
