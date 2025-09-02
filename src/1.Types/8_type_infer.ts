// 8. Type Infer : Typescript can infer the type of variable based on it's value.

// here we assign string value to playerName variable
let playerName = "T Tamim";

// These will through error cause typescript inferred that, type of playerName variable is string based on it's initial value.
// playerName = 10;
// playerName = true;

playerName = "T Tamim Iqbal Khan";

console.log("player name ::", playerName);
