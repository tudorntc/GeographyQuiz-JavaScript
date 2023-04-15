// Geografy Quiz
let correctAnswer = 0;

//Question 1

console.log("What is the highest mountain in the world?");
console.log("Enter the letter corresponding to the correct answer!");
console.log("a. Kilimanjaro");
console.log("b. Mount Everest");
console.log("c. Fuji");
console.log("d. Ararat");
const answer1 = prompt("Your answer: ");
if (answer1 === "b"){
    console.log("Correct!");
    correctAnswer++;
    correctAnswer++;
}
else{
    console.log("Incorrect!");
}

//Question 2

console.log("Which is the biggest country?");
console.log("Enter the letter corresponding to the correct answer!");
console.log("a. USA");
console.log("b. China");
console.log("c. Germany");
console.log("d. Russia");
const answer2 = prompt("Your answer: ");
if (answer2 === "d"){
    console.log("Correct!");
    correctAnswer++;
    correctAnswer++;
}
else{
    console.log("Incorrect!");
}

//Question 3

console.log("Which is the smallest country?");
console.log("Enter the letter corresponding to the correct answer!");
console.log("a. Liechtenstein");
console.log("b. Luxembourg");
console.log("c. Vatican");
console.log("d. San Marino");
const answer3 = prompt("Your answer: ");
if (answer3 === "c"){
    console.log("Correct!");
    correctAnswer++;
    correctAnswer++;
}
else{
    console.log("Incorrect!");
}

//Question 4

console.log("Which city is on two continents?");
console.log("Enter the letter corresponding to the correct answer!");
console.log("a. Istanbul");
console.log("b. Moscow");
console.log("c. Beijing");
console.log("d. Rome");
const answer4 = prompt("Your answer: ");
if (answer4 === "a"){
    console.log("Correct!");
    correctAnswer++;
    correctAnswer++;
}
else{
    console.log("Incorrect!");
}

//Question 5

console.log("Which country is shaped like a fish?");
console.log("Enter the letter corresponding to the correct answer!");
console.log("a. Romania");
console.log("b. Croatia");
console.log("c. Bosnia and Herzegovina");
console.log("d. Italy");
const answer5 = prompt("Your answer: ");
if (answer5 === "a"){
    console.log("Correct!");
    correctAnswer++;
    correctAnswer++;
}
else{
    console.log("Incorrect!");
}

//Result

console.log("Your results: " + correctAnswer + "0" + "%");