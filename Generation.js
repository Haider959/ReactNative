import React, { useState } from "react";
export const Add = (index) => {
    let Collction = [];
    for (let step = 0; step < index; step++) {
        //   console.log(Math.trunc(Math.random() * 100));
        //  console.log(Collction);
        Collction.push({
            id: step,
            companyId: 1,
            date: "2021-02-23",
            sale1: Math.trunc(Math.random() * 100),
            sale2: Math.trunc(Math.random() * 100),
            expense1: Math.trunc(Math.random() * 100),
            expense2: Math.trunc(Math.random() * 100),
            profit1: Math.trunc(Math.random() * 100),
            profit2: Math.trunc(Math.random() * 100),
        });
    }
    return Collction;
};
