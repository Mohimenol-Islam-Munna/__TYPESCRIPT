const obj1: object = {
  id: 1,
  name: "Lukaku",
  club: "Milan",
  jersey: 9,
  hasWc: false,
};

const obj2: {
  id: number;
  name: string;
  club: string;
  jersey: number;
  hasWc: boolean;
} = {
  id: 1,
  name: "messi",
  club: "psg",
  jersey: 10,
  hasWc: false,
};

// optional property
const obj3: {
  id: number;
  name: string;
  club?: string;
  jersey: number;
  hasWc: boolean;
} = {
  id: 1,
  name: "Martinez",
  jersey: 9,
  hasWc: false,
};

console.log("obj 1 ::", obj1);
console.log("obj 2 ::", obj2);
console.log("obj 3 ::", obj3);
