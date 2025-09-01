// 11. Type Alias (Custom Type)
type CountryOrCountryCode = string | number;
type PlayerIncome = string | number;

type Player = {
  id: string;
  name: string;
  country: string;
  hasWc: boolean;
};

// primitive data type with type alias.
let playerIncome: PlayerIncome;
playerIncome = "120 core";

// object with type alias
const player1: Player = {
  id: "m-13",
  name: "messi",
  country: "argentina",
  hasWc: false,
};

// array with type alias
let countries: CountryOrCountryCode[] = ["bd", 880, "ind"];

// type alias extends
type PlayerInfo = Player & {
  club: string;
};

const player2: PlayerInfo = {
  id: "m-13",
  name: "Jamal",
  club: "barcelona",
  country: "poland",
  hasWc: false,
};

console.log("player2 ::", player2);

export {};
