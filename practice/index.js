// let num1 = 8
// let num2 = 2
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2
// let sum = document.getElementById("sum-el")

// function add() {
//     let result = num1 + num2
//     sum.textContent = "Sum: " + result
// }

// function subtract() {
//     let result = num1 - num2
//     sum.textContent = "Sum: " + result
// }

// function divide() {
//     let result = num1 / num2
//     sum.textContent = "Sum: " + result
// }

// function multiply() {
//     let result = num1 * num2
//     sum.textContent = "Sum: " + result
// }

// let featuredPosts = [
//     "Check out my Netflix clone",
//     "Here's the code for my project",
//     "I've just relaunched my portfolio"
// ]

// let aboutMe = ["Erin Schallmoser", 35, true]

// let cards = [7, 4]

// cards.push(6)

// console.log(cards)

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!",
//     "Great to hear",
//     "yay"
// ]

// for (let i = 0; i < messages.length; i += 1) {
//     console.log(messages[i])
// }

// let newMessage = "Same here!"

// messages.push(newMessage)

// console.log(messages)

// messages.pop()

// console.log(messages)

// for (let i = 10; i < 101; i += 10) {
//     console.log(i)
// }

// let cards = [7, 3, 9]

// for (let i = 0; i < cards.length; i++) {
//         console.log(cards[i])
//     }

// let sentence = ["Hello", "my", "name", "is", "Erin"]
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i] + " "
// }

// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// function getTotalRaceTime() {
//     return player1Time + player2Time
// }

// let totalRaceTime = getTotalRaceTime()
// console.log(totalRaceTime)

// function rollDice() {
//     let randomNumber = Math.floor(Math.random() * 6) + 1
//     return randomNumber
// }

// console.log(rollDice())

// let hasCompletedCourse = true;
// let givesCertificate = true;

// if (hasCompletedCourse === true && givesCertificate === true) {
//   generateCertificate();
// }

// function generateCertificate() {
//   console.log("Generating certificate...");
// }

// let hasSolvedChallenge = false;
// let hasHintsLeft = false;

// if (!hasSolvedChallenge && !hasHintsLeft) {
//   showSolution();
// }

// function showSolution() {
//   console.log("Showing the solution...");
// }

// let likesDocumentaries = false;
// let likesStartups = true;

// if (likesDocumentaries || likesStartups) {
//   recommendMovie();
// }

// function recommendMovie() {
//   console.log("Hey, check out this new film we think you will like!");
// }

// let castle = {
//   title: "Live like a queen in my castle",
//   price: 190,
//   isPopular: true,
//   nearbyLandmarks: ["the moors", "historic art museum", "awesome beach"],
// };

// console.log(castle.isPopular);
// console.log(castle.nearbyLandmarks);

// const person = {
//   name: "Erin",
//   age: 35,
//   country: "America",
// };

// function logData() {
//   console.log(
//     `${person.name} is ${person.age} years old and lives in ${person.country}`
//   );
// }

// logData();

// const age = 66.5;

// if (age < 6) {
//   console.log("free");
// } else if (age < 18) {
//   console.log("child discount");
// } else if (age < 27) {
//   console.log("student discount");
// } else if (age < 67) {
//   console.log("full price");
// } else {
//   console.log("senior discount");
// }

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

// console.log("The 5 largest countries in the world:");
// for (let i = 0; i < largeCountries.length; i++) {
//   console.log("- " + largeCountries[i]);
// }

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// largeCountries.pop();
// console.log(largeCountries);
// largeCountries.push("Pakistan");
// console.log(largeCountries);
// largeCountries.shift();
// console.log(largeCountries);
// largeCountries.unshift("China");
// console.log(largeCountries);

// let dayofMonth = 13;
// let weekDay = "Monday";

// if (dayofMonth === 13 && weekDay === "Friday") {
//   console.log("😱");
// } else {
//   console.log("😃");
// }

// const hands = ["rock", "paper", "scissors"];

// function playGame() {
//   console.log(hands[Math.floor(Math.random() * 3)]);
// }

// playGame();

// let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
// let appleShelf = document.getElementById("apple-shelf");
// let orangeShelf = document.getElementById("orange-shelf");

// function fruitSorter() {
//   for (let i = 0; i < fruit.length; i++) {
//     if (fruit[i] === "🍎") {
//       appleShelf.textContent += fruit[i] + " ";
//     } else {
//       orangeShelf.textContent += fruit[i] + " ";
//     }
//   }
// }

// fruitSorter();

// const clickBox = document.getElementById("box");

// clickBox.addEventListener("click", function () {
//   console.log("I want to open the box!");
// });
// const container = document.getElementById("container");

// container.innerHTML = "<button onclick='buy()'>Buy!</button>";

// function buy() {
//   container.innerHTML += "<p>Thank you for buying!</p>";
// }

// function add(num1, num2) {
//   return num1 + num2;
// }

// console.log(add(3, 4));
// console.log(add(9, 102));

// function getFirst(arr) {
//   return arr[0];
// }

// console.log(getFirst([6, 9, 0, -2]));
// console.log(getFirst([10, 10, 11]));

// const player = "Per";
// const opponent = "Nick";
// const game = "AmazingFighter";
// let points = 0;
// let hasWon = false;

// points += 100;
// hasWon = true;

// if (hasWon) {
//   console.log(`${player} got ${points} points and won the ${game} game!`);
// } else {
//   console.log(`The winner is ${opponent}! ${player} lost the game`);
// }

// let myCourses = [
//   "Learn CSS Animations",
//   "UI Design Fundamentals",
//   "Intro to Clean Code",
// ];

// function getArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

// getArray(myCourses);

// let myPublications = localStorage.getItem("myPublications");

// console.log(myPublications);

// let data = [
//   {
//     player: "Jane",
//     score: 52,
//   },
//   {
//     player: "Mark",
//     score: 41,
//   },
// ];

// const btn = document.getElementById("btn");

// btn.addEventListener("click", function () {
//   console.log(data[0].score);
// });

// const recipient = "James";
// const sender = "Erin";

// const email = `
// Hey ${recipient}!
// How is it going?
// Cheers ${sender}
// `;

// console.log(email);

// const welcomeEl = document.getElementById("welcome-el");

// function greetUser(greeting, name, emoji) {
//   welcomeEl.textContent = `${greeting}, ${name} ${emoji}`;
// }

// greetUser("Howdy there", "Erin", "😎");

function generateSentence(desc, arr) {
  let baseString = `The ${arr.length} ${desc} are `;
  const lastIndex = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (i === lastIndex) {
      baseString += arr[i] + ".";
    } else {
      baseString += arr[i] + ", ";
    }
  }
  return baseString;
}

const sentence = generateSentence("best songs off Noah Gundersen's new album", [
  "Exit Signs",
  "Body",
  "The Coast",
]);

console.log(sentence);
