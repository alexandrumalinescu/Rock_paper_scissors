let myArray = ["rock", "paper", "scissors"];

function pick(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx]; 
}
let computer = pick(myArray);
let user = pick(myArray);
let play = function () {
  if (computer === user) {
    return "It's a Tie";
  } else if (computer === "paper" && user === "rock" || computer === "rock" && user === "scissors" || computer === "scissors" && user === "paper" ) {
    return "Computer wins";
  } else if (computer === "paper" && user === "scissors" || computer === "rock" && user === "paper" || computer === "scissors" && user === "rock" ) {
    return "User wins";
  } 
};
console.log("Computer choise: " + computer);
console.log("User choice: " + user);
console.log(play());