// 1. function with parameter
const add = (num1: number, num2: number) => {
  console.log("result :", num1 + num2);
};

add(2, 5);

// 2. function with optional parameter
const show = (num1: number, num2?: number) => {
  console.log("result :", num1, num2);
};

show(12);
show(12, 23);

// 3. function return type

// 3.1 return void
const showName = (): void => {
  console.log("Md Mohimenol Islam Munna");
};

showName();

// // 3.2 return void
// const showName2 = (): never => {
//   console.log("Md Mohimenol Islam Munna");
// };

// showName2();

// 3.3 return others type
const showName3 = (): string => {
  console.log("Md Mohimenol Islam Munna 2");
  return "Md";
};

console.log(showName3());
