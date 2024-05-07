const GRID_SIZE = 8; // Total number of cards
const pokemonSprites = []; // Array to store Pokemon sprites
let cards = []; // Array to store card elements
let flippedCards = [];
let matchedCards = [];

// Function to fetch Pokemon sprites from PokeAPI
async function fetchPokemonSprites() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${GRID_SIZE/2}`);
        const data = await response.json();
        data.results.forEach(async (pokemon) => {
            const spriteResponse = await fetch(pokemon.url);
            const spriteData = await spriteResponse.json();
            const sprite = spriteData.sprites.front_default;
            pokemonSprites.push(sprite);
            pokemonSprites.push(sprite); // Each Pokemon appears twice for matching
        });
        createGrid();
    } catch (error) {
        console.error('Error fetching Pokemon sprites:', error);
    }
}

// Function to create the grid of cards
function createGrid() {
    const gridContainer = document.getElementById('gridContainer');
    pokemonSprites.forEach((sprite, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = index;
        card.addEventListener('click', flipCard);
        gridContainer.appendChild(card);
        cards.push(card);
    });
    shuffle(cards);
}

// Function to shuffle the cards
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    array.forEach((card, index) => {
        card.style.order = index;
    });
}

// Function to flip a card
function flipCard() {
    const cardIndex = this.dataset.index;
    const isFlipped = flippedCards.includes(cardIndex);
    if (!isFlipped && matchedCards.length < GRID_SIZE / 2) {
        this.style.backgroundImage = `url(${pokemonSprites[cardIndex]})`;
        flippedCards.push(cardIndex);
        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

// Function to check if flipped cards match
function checkMatch() {
    const [firstCardIndex, secondCardIndex] = flippedCards;
    const firstCardSprite = pokemonSprites[firstCardIndex];
    const secondCardSprite = pokemonSprites[secondCardIndex];
    if (firstCardSprite === secondCardSprite) {
        matchedCards.push(firstCardIndex, secondCardIndex);
        if (matchedCards.length === GRID_SIZE) {
            setTimeout(() => {
                alert('Congratulations! You matched all the Pokémon!');
            }, 500);
        }
    } else {
        setTimeout(() => {
            cards[firstCardIndex].style.backgroundImage = '';
            cards[secondCardIndex].style.backgroundImage = '';
        }, 1000);
    }
    flippedCards = [];
}

// Initialize the game
fetchPokemonSprites();
