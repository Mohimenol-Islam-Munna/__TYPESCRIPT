// 11. Type Alias (Custom Type)

type CountryOrCountryCode = string | number;

type PlayerIncome = string | number;

type Player = {
  id: string;
  name: string;
  country: string;
  hasWc: boolean;
};

// variable with type alias
let playerIncom: PlayerIncome;
playerIncom = "120 core";
console.log("playerIncom ::", playerIncom);

// object with type alias
const player1: Player = {
  id: "m-13",
  name: "messi",
  country: "argentina",
  hasWc: false,
};

console.log("player1 ::", player1);

// array with type alias
let countries: CountryOrCountryCode[] = ["bd", 880, "ind"];

console.log("countries ::", countries);

// type alias extends

type PlayerInfo = Player & {
  club: string;
};

const player2: PlayerInfo = {
  id: "m-13",
  name: "levendoski",
  club: "bercelona",
  country: "poland",
  hasWc: false,
};

console.log("player2 ::", player2);


export {};
