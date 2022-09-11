// 1. Primitives

// 1.1 string
let player1: string;
player1 = "messi";
let player2: string = "ronaldo";

console.log("string :: player1 & player2 :", player1, player2);

// 1.2 number
let jersy1: number;
jersy1 = 10;
let jersy2: number = 7;

console.log("number :: jersy1 & jersy2 :", jersy1, jersy2);

// 1.3 boolean
let isArgentine1: boolean;
isArgentine1 = true;
let isArgentine2: boolean = false;

console.log(
  "boolean :: isArgentine1 & isArgentine2 :",
  isArgentine1,
  isArgentine2
);

// 1.4 null
let wcTrophy1: null;
wcTrophy1 = null;
let wcTrophy2: null = null;

console.log("null :: wcTrophy1 & wcTrophy2 :", wcTrophy1, wcTrophy2);

// 1.5 undefined
let intTrophy1: undefined;
intTrophy1 = undefined;
let intTrophy2: undefined = undefined;

console.log("undefined :: intTrophy1 & intTrophy2 :", intTrophy1, intTrophy2);

// 1.6 bigint
let salary1: bigint;
let salary11: bigint;

salary1 = BigInt(100);
salary11 = 200n;

let salary2: bigint = BigInt(300);
let salary22: bigint = 300n;

console.log(
  "bigint :: salary1 & salary11 & salary2 & salary22 :",
  salary1,
  salary11,
  salary2,
  salary22
);

// 1.7 symbol
const firstName1 = Symbol("leonel");
const firstName2 = Symbol("cristian");

console.log("symbol :: firstName1 & firstName2 :", firstName1, firstName2);

// 2. special type

// 2.1 any (not recommanded to use)
let brandAmbassador1: any = 1;
brandAmbassador1 = "pepsi";

let brandAmbassador2: any = true;

brandAmbassador2 = {
  name: "toyota",
};

console.log(
  "any :: brandAmbassador1 & brandAmbassador2 :",
  brandAmbassador1,
  brandAmbassador2
);

// 2.2 unknown
// Not assignable to others type except any 
// Not access methods of variables

let position1: unknown;
position1 = 1;
position1 = "midfield";

let position2: unknown = "stricker";

// let newVal: string = position2;  // through error
// console.log(position2.toUpperCase()) // through error

console.log("unknown :: position1 & position2 :", position1, position2);
