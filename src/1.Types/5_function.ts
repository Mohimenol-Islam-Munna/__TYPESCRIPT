// accept all function
let multiply1: Function;

const multiplyFunc1 = (a: number, b: number): number => {
  return a * b;
};

multiply1 = multiplyFunc1;
console.log("result :1:", multiply1(10, 6));

function printResult() {
  console.log("print result function ::");
}

// accept function with the specific type
let multiply2: (p: number, q: number, r: number) => number;

multiply2 = multiplyFunc1;
console.log("multiply2 result ::", multiply2(10, 2, 3));

// multiply2 = printResult; through error
// console.log("multiply2 result ::", multiply2(2, 3, 4));

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
