// 11. interface (Custom Type)

interface Player {
  id: string;
  readonly name: string;
  club: string;
  hasWc: boolean;
}

const player1: Player = {
  id: "m-13",
  name: "messi",
  club: "psg",
  hasWc: false,
  salary: 120,
};

console.log("player1 ::", player1);

player1.hasWc = true;
// player1.name = "ronaldo"; through error

console.log("player1 ::", player1);

interface PlayerInfo extends Player {
  country: string;
}

// interface entends
const player2: PlayerInfo = {
  id: "m-130",
  name: "Benzema",
  club: "RMD",
  country: "france",
  hasWc: true,
  salary: "120 core",
};

console.log("player2 ::", player2);

// add new property to an existing interface 
interface Player {
  salary: string | number;
}

export {};
