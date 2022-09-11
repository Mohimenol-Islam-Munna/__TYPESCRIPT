"use strict";
// 1. Primitives
exports.__esModule = true;
// 1.1 string
var player1;
player1 = "messi";
var player2 = "ronaldo";
console.log("string :: player1 & player2 :", player1, player2);
// 1.2 number
var jersy1;
jersy1 = 10;
var jersy2 = 7;
console.log("number :: jersy1 & jersy2 :", jersy1, jersy2);
// 1.3 boolean
var isArgentine1;
isArgentine1 = true;
var isArgentine2 = false;
console.log("boolean :: isArgentine1 & isArgentine2 :", isArgentine1, isArgentine2);
// 1.4 null
var wcTrophy1;
wcTrophy1 = null;
var wcTrophy2 = null;
console.log("null :: wcTrophy1 & wcTrophy2 :", wcTrophy1, wcTrophy2);
// 1.5 undefined
var intTrophy1;
intTrophy1 = undefined;
var intTrophy2 = undefined;
console.log("undefined :: intTrophy1 & intTrophy2 :", intTrophy1, intTrophy2);
// 1.6 bigint
var salary1;
var salary11;
salary1 = BigInt(100);
salary11 = 200n;
var salary2 = BigInt(300);
var salary22 = 300n;
console.log("bigint :: salary1 & salary11 & salary2 & salary22 :", salary1, salary11, salary2, salary22);
// 1.7 symbol
var firstName1 = Symbol("leonel");
var firstName2 = Symbol("cristian");
console.log("symbol :: firstName1 & firstName2 :", firstName1, firstName2);
