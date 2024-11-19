// 요소 가져오기
const customText = document.getElementById('customText');
const fontsButton = document.getElementById('fontsButton');
const colorsButton = document.getElementById('colorsButton');
const sizeButton = document.getElementById('sizeButton');

const fontsMenu = document.getElementById('fontsMenu');
const colorsMenu = document.getElementById('colorsMenu');
const sizeMenu = document.getElementById('sizeMenu');

// 드롭다운 토글 함수
function toggleMenu(menu) {
  const isVisible = menu.style.display === 'block';
  menu.style.display = isVisible ? 'none' : 'block';
}

// 폰트 변경 이벤트 (텍스트 박스와 버튼 텍스트 업데이트)
fontsMenu.addEventListener('click', (event) => {
  const font = event.target.getAttribute('data-font'); // 폰트 데이터 가져오기
  const fontName = event.target.textContent; // 버튼 텍스트 가져오기
  if (font) {
    customText.style.fontFamily = font; // 텍스트 박스 폰트 변경
    fontsButton.innerHTML = `${fontName}<span class="triangle" style="font-family: 'Dovemayo Gothic'; margin-left: 20px;">▼</span>`; // 버튼 텍스트 업데이트
  }
  fontsMenu.style.display = 'none';
});

// 색상 변경 이벤트 (텍스트 박스와 버튼 텍스트 업데이트)
colorsMenu.addEventListener('click', (event) => {
  const color = event.target.getAttribute('data-color'); // 색상 데이터 가져오기
  const colorName = event.target.textContent; // 버튼 텍스트 가져오기
  if (color) {
    customText.style.color = color; // 텍스트 박스 색상 변경
    colorsButton.innerHTML = `${colorName}<span class="triangle" style="font-family: 'Dovemayo Gothic'; margin-left: 20px;">▼</span>`; // 버튼 텍스트 업데이트
  }
  colorsMenu.style.display = 'none';
});

// 크기 변경 이벤트 (텍스트 박스와 버튼 텍스트 업데이트)
sizeMenu.addEventListener('click', (event) => {
  const size = event.target.getAttribute('data-size'); // 크기 데이터 가져오기
  const sizeName = event.target.textContent; // 버튼 텍스트 가져오기
  if (size) {
    customText.style.fontSize = size; // 텍스트 박스 크기 변경
    sizeButton.innerHTML = `${sizeName}<span class="triangle" style="font-family: 'Dovemayo Gothic'; margin-left: 20px;">▼</span>`; // 버튼 텍스트 업데이트
  }
  sizeMenu.style.display = 'none';
});

// 버튼 클릭 시 메뉴 토글
fontsButton.addEventListener('click', () => toggleMenu(fontsMenu));
colorsButton.addEventListener('click', () => toggleMenu(colorsMenu));
sizeButton.addEventListener('click', () => toggleMenu(sizeMenu));

// 페이지 외부 클릭 시 메뉴 닫기
document.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdown')) {
    fontsMenu.style.display = 'none';
    colorsMenu.style.display = 'none';
    sizeMenu.style.display = 'none';
  }
});

// 폰트 변경 이벤트 (텍스트 박스와 버튼 텍스트 업데이트)
fontsMenu.addEventListener('click', (event) => {
  const font = event.target.getAttribute('data-font');
  const fontName = event.target.textContent;
  if (font) {
    customText.style.fontFamily = font;
    fontsButton.innerHTML = `${fontName}<span class="triangle" style="font-family: 'Dovemayo Gothic'; margin-left: 20px;">▼</span>`;
  }
  fontsMenu.style.display = 'none';
});

// 색상 변경 이벤트 (텍스트 박스와 버튼 텍스트 업데이트)
colorsMenu.addEventListener('click', (event) => {
  const color = event.target.getAttribute('data-color');
  const colorName = event.target.textContent;
  if (color) {
    customText.style.color = color;
    colorsButton.innerHTML = `${colorName}<span class="triangle" style="font-family: 'Dovemayo Gothic'; margin-left: 20px;">▼</span>`;
  }
  colorsMenu.style.display = 'none';
});

// 크기 변경 이벤트 (텍스트 박스와 버튼 텍스트 업데이트)
sizeMenu.addEventListener('click', (event) => {
  const size = event.target.getAttribute('data-size');
  const sizeName = event.target.textContent;
  if (size) {
    customText.style.fontSize = size;
    sizeButton.innerHTML = `${sizeName}<span class="triangle" style="font-family: 'Dovemayo Gothic'; margin-left: 20px;">▼</span>`;
  }
  sizeMenu.style.display = 'none';
});

// TO 버튼과 드롭다운 메뉴 가져오기
const toButton = document.getElementById('toButton');
const toMenu = document.getElementById('toMenu');

// TO 메뉴 토글 함수
function toggleToMenu() {
  const isVisible = toMenu.style.display === 'block';
  toMenu.style.display = isVisible ? 'none' : 'block';
}

// TO 버튼 클릭 이벤트
toButton.addEventListener('click', toggleToMenu);

// TO 메뉴 항목 클릭 이벤트
toMenu.addEventListener('click', (event) => {
  const selectedName = event.target.getAttribute('data-name');
  if (selectedName) {
    toButton.innerHTML = `${selectedName}<span class="triangle" style="font-family: 'Dovemayo Gothic'; margin-left: 20px;">▼</span>`;
    toMenu.style.display = 'none'; // 메뉴 닫기
  }
});

// 페이지 외부 클릭 시 TO 메뉴 닫기
document.addEventListener('click', (event) => {
  if (!event.target.closest('.to-section')) {
    toMenu.style.display = 'none';
  }
});

const addFilesButton = document.getElementById("addFilesButton");
const fileViewer = document.getElementById("fileViewer");
const draggableIcon = document.getElementById("draggableIcon");
const fileImage = document.getElementById("fileImage");

// Show file viewer
addFilesButton.addEventListener("click", () => {
  fileViewer.style.display = fileViewer.style.display === "block" ? "none" : "block";
});

// Show draggable icon when clicking on files.png
fileImage.addEventListener("click", () => {
  draggableIcon.style.display = "block";
  fileViewer.style.display = "none"; // Hide the file viewer
});

// Make the icon draggable
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

draggableIcon.addEventListener("mousedown", (event) => {
  isDragging = true;
  offsetX = event.clientX - draggableIcon.getBoundingClientRect().left;
  offsetY = event.clientY - draggableIcon.getBoundingClientRect().top;
  draggableIcon.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (event) => {
  if (!isDragging) return;

  const mouseX = event.clientX;
  const mouseY = event.clientY;

  draggableIcon.style.left = `${mouseX - offsetX}px`;
  draggableIcon.style.top = `${mouseY - offsetY}px`;
});

document.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    draggableIcon.style.cursor = "grab";
  }
});

const typingSound = document.getElementById("typingSound");
let typingTimeout;

// Play typing sound
function playTypingSound() {
  if (typingSound.paused) {
    typingSound.play();
  }
}

// Pause typing sound (keep current position)
function pauseTypingSound() {
  typingSound.pause();
}

// Detect typing in the textarea
customText.addEventListener("input", () => {
  clearTimeout(typingTimeout);
  playTypingSound();

  // Pause the sound if no typing occurs for 2 seconds
  typingTimeout = setTimeout(() => {
    pauseTypingSound();
  }, 300);
});

// Pause sound when backspace is pressed
customText.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    pauseTypingSound();
  }
});

// 폰트 메뉴 항목 스타일 변경
fontsMenu.querySelectorAll('button').forEach((button) => {
  const font = button.getAttribute('data-font');
  if (font) {
    button.style.fontFamily = font; // 메뉴 항목에 폰트 적용
  }
});

// 색상 메뉴 항목 스타일 변경
colorsMenu.querySelectorAll('button').forEach((button) => {
  const color = button.getAttribute('data-color');
  if (color && color !== '#000000') { // 블랙은 제외
    button.style.color = color; // 메뉴 항목에 색상 적용
  }
});
