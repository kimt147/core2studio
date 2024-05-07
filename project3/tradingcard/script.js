// Function to fetch moves list by type from PokeAPI
function fetchMovesByType(type) {
  fetch(`https://pokeapi.co/api/v2/type/${type}`)
    .then((response) => response.json())
    .then((data) => {
      const moveSelect1 = document.getElementById("moveSelect1");
      const moveSelect2 = document.getElementById("moveSelect2");
      moveSelect1.innerHTML = ""; // Clear previous moves
      moveSelect2.innerHTML = ""; // Clear previous moves
      data.moves.forEach((move) => {
        const option1 = document.createElement("option");
        const option2 = document.createElement("option");
        option1.value = move.name;
        option1.textContent = move.name;
        option2.value = move.name;
        option2.textContent = move.name;
        moveSelect1.appendChild(option1);
        moveSelect2.appendChild(option2);
      });
    });
}

// Function to fetch move effect
function fetchMoveEffect(moveName, moveNameDiv, moveEffectDiv) {
  fetch(`https://pokeapi.co/api/v2/move/${moveName}`)
    .then((response) => response.json())
    .then((data) => {
      moveNameDiv.innerHTML = `<h2>${moveName}</h2>`;
      moveEffectDiv.innerHTML = `<p>${data.effect_entries[0].short_effect}</p>`;
    });
}

// Function to display type image
function displayTypeImage(type) {
  const typeImage = document.getElementById("typeImage");
  const img = typeImage.querySelector("img");
  img.src = `imgs/${type}.png`;
  img.alt = type;
  img.style.display = "block"; // 이미지 표시
}

// Event listener for type selection change
document.getElementById("typeSelect").addEventListener("change", function () {
  const selectedType = this.value;
  fetchMovesByType(selectedType);
  displayTypeImage(selectedType);
});

// Event listener for move selection change (container 1)
document.getElementById("moveSelect1").addEventListener("change", function () {
  const selectedMove = this.value;
  const moveNameDiv = document.getElementById("moveName1");
  const moveEffectDiv = document.getElementById("moveEffect1");
  fetchMoveEffect(selectedMove, moveNameDiv, moveEffectDiv);
});

// Event listener for move selection change (container 2)
document.getElementById("moveSelect2").addEventListener("change", function () {
  const selectedMove = this.value;
  const moveNameDiv = document.getElementById("moveName2");
  const moveEffectDiv = document.getElementById("moveEffect2");
  fetchMoveEffect(selectedMove, moveNameDiv, moveEffectDiv);
});

// 페이지 로드 시 실행
window.addEventListener("DOMContentLoaded", (event) => {
  // typeSelect 요소의 value를 변경하여 normal이 아닌 값이 선택되도록 설정
  document.getElementById("typeSelect").value = "";

  // fetchMovesByType 함수를 호출하여 이벤트를 트리거하고 데이터를 가져올 수 있도록 함
  fetchMovesByType("");
});

var isMusicPlaying = false; // 음악 재생 여부를 나타내는 변수

function toggleMusic() {
  var musicBtn = document.getElementById("musicBtn");
  var music = document.getElementById("bgm");

  if (isMusicPlaying) {
    // 음악을 정지하고 아이콘 변경
    music.pause();
    musicBtn.classList.remove("active");
  } else {
    // 음악을 재생하고 아이콘 변경
    music.play();
    musicBtn.classList.add("active");
  }

  // 음악 재생 상태 변경
  isMusicPlaying = !isMusicPlaying;
}

function adjustBackgroundMusicVolume(volume) {
  var music = document.getElementById("bgm");
  music.volume = volume;
}

// 호출하는 곳에서 볼륨을 조정할 수 있습니다. 0.5는 절반 볼륨을 나타냅니다.
adjustBackgroundMusicVolume(0.5);

document.getElementById("bgm").volume = 0.5; // 배경 음악 볼륨 설정

//download card with download button
function downloadImage() {
  var container = document.querySelector(".flipper");
  html2canvas(container).then(function (canvas) {
    var link = document.createElement("a");
    link.download = "container_image.png";
    link.href = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    link.click();
  });
}

document
  .querySelector(".button-download")
  .addEventListener("click", () => downloadImage());

  // Event listener for type dropdown
document.getElementById("typeDropdownContent").addEventListener("click", function (event) {
  if (event.target.classList.contains("dropdown-item")) {
      const selectedType = event.target.getAttribute("data-value");
      fetchMovesByType(selectedType);
      displayTypeImage(selectedType);
  }
});


var isDownloading = false; // 다운로드 중 여부를 나타내는 변수

function downloadImage() {
  if (!isDownloading) { // 다운로드 중이 아닌 경우에만 실행
    isDownloading = true; // 다운로드 중으로 설정
    var container = document.querySelector(".flipper");
    html2canvas(container).then(function (canvas) {
      var link = document.createElement("a");
      link.download = "container_image.png";
      link.href = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      link.click();
      isDownloading = false; // 다운로드 완료 후 상태 변경
    });
  }
}