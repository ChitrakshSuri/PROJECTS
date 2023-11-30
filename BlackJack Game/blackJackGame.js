// let firstCard = getRandomCard()
// let secondCard = getRandomCard()

// let cards = [firstCard,secondCard]
let player = {
  name: "Chitraksh",
  chips: 8000,
};
let cards = [];
// let sum = firstCard + secondCard
let sum = 0;

let hasBlackJack = false;
let isAlive = false; math

let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");

let cardsEl = document.getElementById("cards-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": ₹" + player.chips;

// console.log(cards);

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 11) {
    return 10;
  } else if (randomNumber === 12) {
    return 10;
  } else if (randomNumber === 13) {
    return 10;
  } else if (randomNumber === 11) {
    return 11;
  }

  return randomNumber;
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: "; // + cards[0] + " " + cards[1]

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
  // console.log(message)
}

function newCard() {
  // console.log("Drawing a new card from the deck.");
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum = sum + card;

    cards.push(card);
    // console.log(cards);

    renderGame();
  }
}
