// 텍스트 배열 설정
const texts = [
    "Hello there! Welcome to the world of Pokémon! My name is Oak! ▼",
    "People call me the Pokémon Prof! ▼",
    "This world is inhabited by creatures called Pokémon! ▼",
    "For some people, Pokémon are pets. ▼",
    "Here, you can make your very own Pikachu! ▼",
    "Oh, and who knows? Maybe in the future, ▼",
    "I’ll extend the invitation to other Pokémon, ▼", 
    "allowing you to create your own unique pokemons. ▼",
    "It's just a thought, but wouldn't that be incredible? ▼",
    "So, why wait? Let's dive in and create your very own Pikachu! ▼",
    "Explore various backgrounds and snap some photos ▼",
    "in the stunning Pokémon world! ▼",
    "You can even create a customized trading card for your own Pikachu! ▼",
    "Design its abilities, type, and skills to your heart's content. ▼",
    "Once you're done, don't forget to show me your masterpiece! ▼",
    "I can't wait to see what you come up with! ▼",
];  

// 초기 텍스트 인덱스 설정
let textIndex = 0;
let letterIndex = 0;
let intervalId;

// 배경음악 추가
const bgm = new Audio('imgs/bgm2.mp3');
bgm.loop = true; // 루프 재생 설정
bgm.currentTime = 0.0; // 시작 시간 설정
let bgmPlayed = false;

// 클릭 이벤트 추가
document.addEventListener('click', function() {
    playClickSound();
    showNextText();
});

// 다음 텍스트 표시 함수
function showNextText() {
    playBgm(); // 배경음악 재생

    clearInterval(intervalId); // 이전에 설정된 interval을 초기화

    const container = document.querySelector('.container');
    container.innerHTML = ''; // 텍스트를 비웁니다.

    const text = texts[textIndex]; // 현재 인덱스의 텍스트 가져오기
    letterIndex = 0; // 글자 인덱스 초기화

    // 한 글자씩 나타내는 interval 설정
    intervalId = setInterval(() => {
        // 현재 글자 가져오기
        const char = text.charAt(letterIndex);
        // 글자를 span으로 만들어 container에 추가
        const span = document.createElement('span');
        span.textContent = char;
        container.appendChild(span);
        letterIndex++;
        // 모든 글자를 표시한 경우 interval 정지
        if (letterIndex >= text.length) {
            clearInterval(intervalId);
        }
    }, 50); // 글자 간의 간격 설정 (기존에는 100이었음)
    // 다음 텍스트 인덱스 증가
    textIndex++;
}

// 배경음악 재생 함수
function playBgm() {
    if (!bgmPlayed) {
        bgm.play();
        bgmPlayed = true;
    }
}

// 클릭 사운드 재생 함수
function playClickSound() {
    const clickSound = new Audio('imgs/click.mp3');
    clickSound.play();
}
