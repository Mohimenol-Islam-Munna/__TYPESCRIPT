// 3. array

// 3.1 :: syntax 1
let club1: string[];
club1 = ["psg", "bercelona", "real madrid"];
let jersy1: number[] = [10, 23, 8];

console.log("array syntax 1 :: club1 & jersy1 ", club1, jersy1);

// 3.2 :: syntax 2
let club2: Array<string>;
club2 = ["milan", "sevila", "ATM"];
let jersy2: Array<number> = [9, 3, 18];

console.log("array syntax 2 :: club2 & jersy2 ", club2, jersy2);

// 3.3 :: Mixed type array
let club3: (string | number | boolean)[] = ["MU", 1, "MNC", true];

console.log("club3 ::", club3);

export {};
