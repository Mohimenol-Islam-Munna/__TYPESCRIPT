// 1. function with parameter
var add = function (num1, num2) {
    console.log("result :", num1 + num2);
};
add(2, 5);
// 2. function with optional parameter
var show = function (num1, num2) {
    console.log("result :", num1, num2);
};
show(12);
show(12, 23);
// 3. function return type
// 3.1 return void
var showName = function () {
    console.log("Md Mohimenol Islam Munna");
};
showName();
// // 3.2 return void
// const showName2 = (): never => {
//   console.log("Md Mohimenol Islam Munna");
// };
// showName2();
// 3.3 return others type
var showName3 = function () {
    console.log("Md Mohimenol Islam Munna 2");
    return "Md";
};
console.log(showName3());
