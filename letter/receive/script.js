// 요소 가져오기
const letter1 = document.getElementById('letter1');
const letter13 = document.getElementById('letter13');
const letter15 = document.getElementById('letter15');
const letter3 = document.getElementById('letter3');
const overlayContainer = document.getElementById('overlayContainer');
const overlayImage = document.getElementById('openedLetter');
const overlayVideo = document.getElementById('overlayVideo');
const header = document.querySelector('h2');
const imageContainer = document.getElementById('imageContainer');
const dropdownButton = document.getElementById('dropdownButton'); // 드롭다운 버튼
const dropdownMenu = document.getElementById('dropdownMenu'); // 드롭다운 메뉴
const newestButton = document.getElementById('newest');
const oldestButton = document.getElementById('oldest');

// 초기 unopened letters 수
let unopenedLetters = 13;

// 초기 이미지 순서 배열
const originalOrder = Array.from(imageContainer.children);

// 초기 설정: NEWEST 선택
function initializeDefaultSelection() {
  dropdownButton.textContent = 'NEWEST      ▼'; // 버튼 텍스트를 NEWEST로 설정
  originalOrder.forEach((img) => imageContainer.appendChild(img)); // 기본 정렬 유지
}

// 숫자 업데이트 함수
function updateUnopenedLetters(letterId) {
  const letterElement = document.getElementById(letterId);

  if (letterElement && !letterElement.classList.contains('opened')) {
    unopenedLetters--;
    letterElement.classList.add('opened'); // 열린 상태를 추적
    header.textContent = `${unopenedLetters} UNOPENED LETTERS!!`;

    if (unopenedLetters === 0) {
      header.textContent = "ALL LETTERS OPENED!";
    }
  }
}

// 오버레이 표시 함수
function showOverlay(imageSrc, videoVisible) {
  overlayImage.src = imageSrc;
  overlayVideo.style.display = videoVisible ? 'block' : 'none';
  overlayContainer.style.display = 'block';
  overlayContainer.classList.add('active');
}

// 드롭다운 토글 함수
dropdownButton.addEventListener('click', () => {
  const isVisible = dropdownMenu.style.display === 'block';
  dropdownMenu.style.display = isVisible ? 'none' : 'block';
});

// 초기 설정: NEWEST 선택
function initializeDefaultSelection() {
    dropdownButton.innerHTML = `NEWEST<span class="triangle" style="font-family: 'Dovemayo_gothic'; margin-left: 20px;">▼</span>`;
    originalOrder.forEach((img) => imageContainer.appendChild(img)); // 기본 정렬 유지
  }
  
  // NEWEST 버튼 클릭 이벤트
  newestButton.addEventListener('click', () => {
    dropdownMenu.style.display = 'none'; // 드롭다운 닫기
    dropdownButton.innerHTML = `NEWEST<span class="triangle" style="font-family: 'Dovemayo_gothic'; margin-left: 20px;">▼</span>`; // 버튼 텍스트 변경
    originalOrder.forEach((img) => imageContainer.appendChild(img));
  });
  
  // OLDEST 버튼 클릭 이벤트
  oldestButton.addEventListener('click', () => {
    dropdownMenu.style.display = 'none'; // 드롭다운 닫기
    dropdownButton.innerHTML = `OLDEST<span class="triangle" style="font-family: 'Dovemayo_gothic'; margin-left: 20px;">▼</span>`; // 버튼 텍스트 변경
    const reversedOrder = [...originalOrder].reverse();
    reversedOrder.forEach((img) => imageContainer.appendChild(img));
  });
  

// 클릭 이벤트 - letter1 클릭 시
letter1.addEventListener('click', () => {
  letter1.src = './imgs/letteropened1.png';
  showOverlay('./imgs/open1.png', false);
  updateUnopenedLetters('letter1');
});


// 클릭 이벤트 - letter1 클릭 시
letter3.addEventListener('click', () => {
  letter3.src = './imgs/letteropened4.png';
  showOverlay('./imgs/open4.png', false);
  updateUnopenedLetters('letter3');
});

// 클릭 이벤트 - letter13 클릭 시
letter13.addEventListener('click', () => {
  letter13.src = './imgs/letteropened2.png';
  showOverlay('./imgs/open2.png', true);
  updateUnopenedLetters('letter13');
});

// 클릭 이벤트 - letter13 클릭 시
letter15.addEventListener('click', () => {
  letter15.src = './imgs/letteropened3.png';
  showOverlay('./imgs/open3.png', false);
  updateUnopenedLetters('letter15');
});

// 오버레이 및 이미지 클릭 이벤트 - 즉시 사라지게 하기
overlayContainer.addEventListener('click', hideOverlay);
overlayImage.addEventListener('click', hideOverlay);

// 오버레이 숨기기 함수
function hideOverlay() {
  overlayContainer.style.display = 'none';
  overlayVideo.style.display = 'none';
  overlayContainer.classList.remove('active');
}

// 초기화 실행
initializeDefaultSelection();

// 요소 가져오기
const overlaySound = document.getElementById('overlaySound'); // 사운드 요소 추가

// 오버레이 표시 함수
function showOverlay(imageSrc, videoVisible) {
  overlayImage.src = imageSrc;
  overlayVideo.style.display = videoVisible ? 'block' : 'none';
  overlayContainer.style.display = 'block';
  overlayContainer.classList.add('active');
  
  // 사운드 재생
  overlaySound.currentTime = 0; // 재생 위치를 처음으로
  overlaySound.play();
}

// 오버레이 숨기기 함수
function hideOverlay() {
  overlayContainer.style.display = 'none';
  overlayVideo.style.display = 'none';
  overlayContainer.classList.remove('active');
  
  // 사운드 중지
  overlaySound.pause();
  overlaySound.currentTime = 0; // 위치를 초기화
}

// Add REPLY button dynamically
const replyButton = document.createElement('a');
replyButton.textContent = 'REPLY';
replyButton.href = '../writing/index.html';
replyButton.className = 'reply-button';
replyButton.style.display = 'none'; // Initially hidden
overlayContainer.appendChild(replyButton);

// Show overlay with REPLY button
function showOverlay(imageSrc, videoVisible) {
  overlayImage.src = imageSrc;
  overlayVideo.style.display = videoVisible ? 'block' : 'none';
  overlayContainer.style.display = 'block';
  overlayContainer.classList.add('active');
  
  // Show the REPLY button
  replyButton.style.display = 'inline-block';

  // Play overlay sound
  overlaySound.currentTime = 0;
  overlaySound.play();
}

// Hide overlay with REPLY button
function hideOverlay() {
  overlayContainer.style.display = 'none';
  overlayVideo.style.display = 'none';
  overlayContainer.classList.remove('active');
  
  // Hide the REPLY button
  replyButton.style.display = 'none';

  // Pause and reset overlay sound
  overlaySound.pause();
  overlaySound.currentTime = 0;
}
