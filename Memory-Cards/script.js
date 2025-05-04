const gameContainer = document.getElementById('game-container');
let cards = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let flippedCards = [];

// Duplicate the cards to create pairs
cards = [...cards, ...cards];

// Shuffle the cards
cards = shuffleArray(cards);

// Create card elements and append them to the game container
cards.forEach((card, index) => {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.setAttribute('data-index', index);
  cardElement.textContent = '?'; // Initially hide the card value
  cardElement.addEventListener('click', handleCardClick);
  gameContainer.appendChild(cardElement);
});

let flippedCount = 0;

function handleCardClick(event) {
  const clickedIndex = parseInt(event.target.getAttribute('data-index'));

  // Prevent clicking on the same card or already matched cards
  if (flippedCards.length === 2 || flippedCards.includes(clickedIndex)) {
    return;
  }

  const clickedCard = event.target;
  const cardValue = cards[clickedIndex];

  // Update the displayed value
  clickedCard.textContent = cardValue;

  flippedCards.push(clickedIndex);

  if (flippedCards.length === 2) {
    setTimeout(checkMatch, 1000);
  }

  flippedCount++;

//  if (flippedCount === cards.length / 2) {
//    setTimeout(() => alert('Congratulations! You matched all cards!'), 500);
//  }
}

function checkMatch() {
  const [index1, index2] = flippedCards;
  const card1 = document.querySelector(`[data-index="${index1}"]`);
  const card2 = document.querySelector(`[data-index="${index2}"]`);

  if (cards[index1] === cards[index2]) {
    // Matched
    flippedCards = [];
  } else {
    // Not matched, flip back
    setTimeout(() => {
      card1.textContent = '?';
      card2.textContent = '?';
      flippedCards = [];
    }, 500);
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}