"use strict";
// 11. interface (Custom Type)
exports.__esModule = true;
var player1 = {
    id: "m-13",
    name: "messi",
    club: "psg",
    hasWc: false,
    salary: 120
};
console.log("player1 ::", player1);
player1.hasWc = true;
// player1.name = "ronaldo"; through error
console.log("player1 ::", player1);
// interface entends
var player2 = {
    id: "m-130",
    name: "Benzema",
    club: "RMD",
    country: "france",
    hasWc: true,
    salary: "120 core"
};
console.log("player2 ::", player2);
