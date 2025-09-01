//6. Union : combination of multiple types
let address: string | number = "bangladesh";

let info: object | null;
info = {
  id: 1,
  name: "munna",
};

console.log("info :", info);

// info = "munna"; through error 
info = null;

console.log("info :", info);

export {}
