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

// const con = "12";
// for (let step = 10; step < 30; step++) {
//     let data = {
//         dtFrom: `2020-${con}-${step}T08:39:22.921Z`,
//         dtTo: `2020-${con}-${step}T08:39:22.922Z`,
//         companyId: 1,
//         details: [
//             {
//                 date: `2020-${con}-${step}T08:39:22.922Z`,
//                 sale1: Math.trunc(Math.random() * 100),
//                 sale2: Math.trunc(Math.random() * 100),
//                 expense1: Math.trunc(Math.random() * 100),
//                 expense2: Math.trunc(Math.random() * 100),
//                 profit1: Math.trunc(Math.random() * 100),
//                 profit2: Math.trunc(Math.random() * 100),
//             },
//         ],
//     };
//    I(data);
//    Web.Post(URL.SalesPerDay, data);
//}

// for (let step = 2; step < 100; step++) {
//     let any = {
//         companyId: 1,
//         data: [
//             {
//                 accountName: `${step}حساب الفروقات`,
//                 accountTypeId: Math.trunc(Math.random() * 100),
//                 accountNumber: Math.trunc(Math.random() * 100),
//                 phoneNumber: `078${step}0000000`,
//                 balanceDinar: Math.trunc(Math.random() * 100),
//                 balanceDinarState: "دائن/علينا",
//                 balanceDollar: Math.trunc(Math.random() * 100),
//                 balanceDollarState: "مدين/الينا",
//             },
//         ],
//     };

//     console.log(any);
//     Web.Post(URL.SalesPerDay, any);
// }
