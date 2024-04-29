// script.js

var currentColor = 'default'; // Default color
var currentBackground = 'forest'; // Default background

function changeColor() {
    var colorOptions = document.querySelector('.color-options');
    colorOptions.classList.toggle('show');
    
    var expressionOptions = document.querySelector('.expression-options');
    expressionOptions.classList.remove('show');
    
    var backgroundOptions = document.querySelector('.background-options');
    backgroundOptions.classList.remove('show');
}

function setColor(color) {
    var pikachu = document.getElementById('pikachu');
    pikachu.src = 'imgs/' + color + '.png';
    currentColor = color;
    var colorOptions = document.querySelector('.color-options');
    colorOptions.classList.remove('show');
}

function changeExpression(expression) {
    var pikachu = document.getElementById('pikachu');
    pikachu.src = 'imgs/' + expression + currentColor + '.png';

    playSound(expression);

    var options = document.querySelectorAll('.options');
    options.forEach(function(opt) {
        opt.classList.remove('show');
    });
}

function setBackground(background) {
    var backgroundImg = document.getElementById('background-img');
    backgroundImg.src = 'imgs/' + background + '.jpg';
    currentBackground = background;
    var backgroundOptions = document.querySelector('.background-options');
    backgroundOptions.classList.remove('show');
}

function toggleOptions(option) {
    var options = document.querySelectorAll('.options');
    options.forEach(function(opt) {
        opt.classList.remove('show');
    });
    var targetOption = document.querySelector('.' + option);
    targetOption.classList.add('show');

    var buttons = document.querySelectorAll('.button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });
    var targetButton = document.getElementById(option.substring(0, option.indexOf('-')) + 'Btn');
    targetButton.classList.add('active');

    
}


function playSound(expression) {
    var audio;
    switch(expression) {
        case 'evil':
            audio = document.getElementById('evilSound');
            break;
        case 'kind':
            audio = document.getElementById('kindSound');
            break;
        case 'wink':
            audio = document.getElementById('winkSound');
            break;
        case 'smile':
            audio = document.getElementById('smileSound');
            break;
        case 'sleepy':
            audio = document.getElementById('sleepySound');
            break;
        default:
            return;
    }
    audio.play();
}
function downloadImage() {
    // Canvas 생성
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    // Pikachu 이미지와 배경 이미지의 요소 가져오기
    var pikachuImg = document.getElementById('pikachu');
    var backgroundImg = document.getElementById('background-img');
    var shadowImg = document.getElementById('shadow');

    // Canvas 크기를 배경 이미지의 크기로 설정
    canvas.width = backgroundImg.width;
    canvas.height = backgroundImg.height;

    // 배경 이미지 그리기 (object-fit: cover와 유사하게)
    var aspectRatio = backgroundImg.width / backgroundImg.height;
    var canvasAspectRatio = canvas.width / canvas.height;

    var renderWidth, renderHeight;
    var offsetX = 0, offsetY = 0;

    if (aspectRatio > canvasAspectRatio) {
        // 배경 이미지의 가로가 더 길 경우
        renderWidth = canvas.width;
        renderHeight = renderWidth / aspectRatio;
        offsetY = (canvas.height - renderHeight) / 2;
    } else {
        // 배경 이미지의 세로가 더 길거나 같을 경우
        renderHeight = canvas.height;
        renderWidth = renderHeight * aspectRatio;
        offsetX = (canvas.width - renderWidth) / 2;
    }

    ctx.drawImage(backgroundImg, offsetX, offsetY, renderWidth, renderHeight);

    // Shadow 이미지의 가운데 좌표 계산
    var shadowX = (canvas.width - shadowImg.width) / 2 - 25; // 왼쪽으로 이동
    var shadowY = (canvas.height - pikachuImg.height) / 2 + pikachuImg.height - 55; // 피카츄 아래에 위치

    // Pikachu 이미지의 가운데 좌표 계산
    var pikachuX = (canvas.width - pikachuImg.width) / 2;
    var pikachuY = (canvas.height - pikachuImg.height) / 2 + 30; // 살짝 아래로 이동

    // Shadow 이미지 그리기
    ctx.drawImage(shadowImg, shadowX, shadowY, shadowImg.width, shadowImg.height);

    // Pikachu 이미지 그리기
    ctx.drawImage(pikachuImg, pikachuX, pikachuY, pikachuImg.width, pikachuImg.height);

    // Canvas를 이미지로 변환하고 다운로드 링크 생성
    var downloadLink = document.createElement('a');
    downloadLink.href = canvas.toDataURL('image/jpeg'); // jpg 형식으로 설정
    downloadLink.download = 'custom_pikachu.jpg'; // 파일명 설정
    downloadLink.click();
}

var isMusicPlaying = false; // 음악 재생 여부를 나타내는 변수

function toggleMusic() {
    var musicBtn = document.getElementById('musicBtn');
    var music = document.getElementById('bgm');

    if (isMusicPlaying) {
        // 음악을 정지하고 아이콘 변경
        music.pause();
        musicBtn.classList.remove('active');
    } else {
        // 음악을 재생하고 아이콘 변경
        music.play();
        musicBtn.classList.add('active');
    }
    
    // 음악 재생 상태 변경
    isMusicPlaying = !isMusicPlaying;
}

function adjustBackgroundMusicVolume(volume) {
    var music = document.getElementById('bgm');
    music.volume = volume;
}

// 호출하는 곳에서 볼륨을 조정할 수 있습니다. 0.5는 절반 볼륨을 나타냅니다.
adjustBackgroundMusicVolume(0.5);
