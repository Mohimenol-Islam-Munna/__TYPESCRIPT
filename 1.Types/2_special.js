// 2. special type
// 2.1 any (not recommanded to use)
var brandAmbassador1 = 1;
brandAmbassador1 = "pepsi";
var brandAmbassador2 = true;
brandAmbassador2 = {
    name: "toyota"
};
console.log("any :: brandAmbassador1 & brandAmbassador2 :", brandAmbassador1, brandAmbassador2);
// 2.2 unknown
// Not assignable to others type except any
// Not access methods of variables
var position1;
position1 = 1;
position1 = "midfield";
var position2 = "stricker";
// let newVal: string = position2;  // through error
// console.log(position2.toUpperCase()) // through error
console.log("unknown :: position1 & position2 :", position1, position2);
