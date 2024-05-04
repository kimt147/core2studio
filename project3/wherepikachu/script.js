const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score-value');
const clickSound = document.getElementById('click-sound'); // 클릭 소리를 재생할 audio 요소
const logoImage = document.getElementById('logo'); // 게임 시작 이미지
const scoreDiv = document.getElementById('score'); // 스코어 div
const bgm = document.getElementById('bgm'); // 배경 음악
const resultDiv = document.getElementById('result'); // 결과 표시용 div
const resultText = document.getElementById('result-text'); // 결과 메시지 표시용 span
const replayBtn = document.getElementById('replay-btn'); // 다시 시작하기 버튼
const timerElement = document.getElementById('time-left'); // 타이머 표시용 span
const timerDiv = document.getElementById('timer'); // 타이머 div
let score = 0;
let pikachuImage;
let timer;

async function loadRandomPokemonImages(count) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=855`);
    const data = await response.json();
    const pokemons = data.results.filter(pokemon => pokemon.name !== 'pikachu'); // Filter out Pikachu
    const randomPokemons = pokemons.sort(() => Math.random() - 0.5).slice(0, count); // Shuffle and select random Pokémon
    const pokemonImages = [];
    for (const pokemon of randomPokemons) {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        const spriteUrl = data.sprites.front_default;
        const image = new Image();
        image.src = spriteUrl;
        image.classList.add('pokemon');
        image.style.position = 'absolute';
        pokemonImages.push(image);
    }
    return pokemonImages;
}

function getRandomPosition() {
    const x = Math.floor(Math.random() * (gameContainer.offsetWidth - 100));
    const y = Math.floor(Math.random() * (gameContainer.offsetHeight - 100));
    return { x, y };
}

function updateScore() {
    score++;
    scoreElement.textContent = score;

    // 스코어에 따라 포켓몬의 수와 크기 조절
    let pokemonCount = 0;
    let pokemonSize = 0;
    if (score < 3) {
        pokemonCount = 30;
        pokemonSize = 150;
    } else if (score < 6) {
        pokemonCount = 70;
        pokemonSize = 100;
    } else if (score < 7) {
        pokemonCount = 200;
        pokemonSize = 100;
    } else if (score < 8) {
        pokemonCount = 100;
        pokemonSize = 100;
    } else if (score < 9) {
        pokemonCount = 70;
        pokemonSize = 100;
    } else if (score < 10) {
        pokemonCount = 70;
        pokemonSize = 100;
    } else if (score < 11) {
        pokemonCount = 70;
        pokemonSize = 100;
    }

    // 포켓몬 재배치
    loadRandomPokemonImages(pokemonCount).then(pokemonImages => {
        pokemonImages.forEach(image => {
            const position = getRandomPosition();
            image.style.left = `${position.x}px`;
            image.style.top = `${position.y}px`;
            image.style.width = `${pokemonSize}px`;
            image.style.height = `${pokemonSize}px`;
            gameContainer.appendChild(image);
        });
    });
}

function handleClick(event) {
    const target = event.target;
    if (target === pikachuImage) {
        updateScore();
        playClickSound(); // 클릭 소리 재생
        rearrangePokemon();
    }
}

function playClickSound() {
    clickSound.currentTime = 0; // 음향 파일을 처음부터 재생
    clickSound.play(); // 클릭 소리 재생
}

// init() 함수에서 score 초기화 부분을 삭제합니다.
async function init() {
    logoImage.addEventListener('click', startGame); // 로고를 클릭하면 게임을 시작하는 이벤트 리스너 추가
}

async function startGame() {
    logoImage.style.display = 'none'; // 로고 감춤
    score = 0; // 점수를 0으로 초기화
    scoreElement.textContent = '0'; // 화면에 표시된 점수도 초기화
    scoreDiv.style.display = 'block'; // 스코어 div 표시
    gameContainer.style.display = 'block'; // 게임 컨테이너 표시
    resultDiv.style.display = 'none'; // 결과 표시 숨기기
    timerDiv.style.display = 'none'; // 타이머 숨기기
    bgm.volume = 0.3; // 배경 음악 볼륨 설정
    bgm.currentTime = 0.8; // 배경 음악 재생 시간 설정
    bgm.play(); // 배경 음악 재생

    // 배경 이미지 변경
    document.body.style.backgroundImage = "url('imgs/background2.jpg')";

    // 피카츄 등장
    pikachuImage = new Image();
    pikachuImage.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png';
    pikachuImage.classList.add('pokemon');
    pikachuImage.style.position = 'absolute';
    
    // 랜덤으로 초기 위치 설정
    const position = getRandomPosition();
    pikachuImage.style.left = `${position.x}px`;
    pikachuImage.style.top = `${position.y}px`;
    
    pikachuImage.style.zIndex = '999'; // Set the z-index of Pikachu to maximum
    gameContainer.appendChild(pikachuImage);

    // 초기 포켓몬 등장
    updateScore(); // 초기 포켓몬 등장과 스코어 업데이트를 한번에 수행합니다.
    gameContainer.addEventListener('click', handleClick);

    // 게임이 시작되면 타이머를 보이게 합니다.
    timerDiv.style.display = 'block';

    // 타이머 시작 (30초)
    let timeLeft = 30;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft; // 남은 시간 업데이트
        if (timeLeft === 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}


function rearrangePokemon() {
    const pokemons = document.querySelectorAll('.pokemon');
    pokemons.forEach(pokemon => {
        const position = getRandomPosition();
        pokemon.style.left = `${position.x}px`;
        pokemon.style.top = `${position.y}px`;
    });
}

function endGame() {
    gameContainer.removeEventListener('click', handleClick); // 클릭 이벤트 리스너 제거
    clearInterval(timer); // 타이머 중지

    // 피카츄 위치 표시
    const pikachuPosition = pikachuImage.getBoundingClientRect();
    const circle = document.createElement('div');
    circle.style.position = 'absolute';
    circle.style.left = `${pikachuPosition.left}px`;
    circle.style.top = `${pikachuPosition.top}px`;
    circle.style.width = `${pikachuPosition.width}px`;
    circle.style.height = `${pikachuPosition.height}px`;
    circle.style.border = '4px solid red';
    circle.style.borderRadius = '50%';
    circle.style.zIndex = '9999'; // z-index를 최대로 설정
    gameContainer.appendChild(circle);

    resultText.textContent = `You scored: ${score}`;
    resultDiv.style.display = 'block'; // 결과 표시

    // 배경 음악 중지
    bgm.pause();

    // 배경 이미지 변경
    document.body.style.backgroundImage = "url('imgs/background2.jpg')";
}

replayBtn.addEventListener('click', () => {
    // 게임 초기화
    gameContainer.innerHTML = ''; // 게임 컨테이너 비우기
    score = 0; // 점수 초기화
    scoreElement.textContent = '0'; // 화면에 표시된 점수도 초기화
    resultDiv.style.display = 'none'; // 결과 표시 숨기기
    startGame(); // 다시 시작

    // 배경 이미지 변경 (수정된 부분)
    document.body.style.backgroundImage = "url('imgs/background2.jpg')";
    document.body.style.backgroundSize = 'cover'; // 배경 이미지를 창에 꽉 채우도록 설정

    // 배경 음악 다시 재생
    bgm.currentTime = 0.8;
    bgm.play();
});


init();
