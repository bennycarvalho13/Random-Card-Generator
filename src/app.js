/* eslint-disable */
import "bootstrap";
import "./style.css";
const cardNumbers = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
const cardTypes = [
  `<h1 class="text-danger">&#9829;</h1>`,
  `<h1>&#9824;</h1>`,
  `<h1 class="text-danger">&#9830;</h1>`,
  `<h1>&#9827;</h1>`
];

const generateCard = () => {
  let number = document.getElementById("number");
  number.textContent =
    cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
  let randomType = Math.floor(Math.random() * cardTypes.length);
  document.getElementById("typeOne").innerHTML = cardTypes[randomType];
  document.getElementById("typeTwo").innerHTML = cardTypes[randomType];
};

window.onload = function() {
  everyten();
};
document.getElementById("generate").addEventListener("click", function() {
  generateCard();
});
const everyten = () => {
  generateCard();
  setTimeout(() => {
    everyten();
  }, "10000");
};
