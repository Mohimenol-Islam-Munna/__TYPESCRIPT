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

export {};
