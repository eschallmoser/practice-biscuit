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



let sentence = ["Hello", "my", "name", "is", "Erin"]
let greetingEl = document.getElementById("greeting-el")

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
}