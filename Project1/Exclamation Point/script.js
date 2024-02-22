document.addEventListener("DOMContentLoaded", function() {
  // .exclamationpoint와 .quotation 클래스를 가진 모든 이미지 선택
  var exclamationPoints = document.querySelectorAll('.exclamationpoint');
  var quotations = document.querySelectorAll('.quotation');

  // 각각의 이미지 그룹에 대해 애니메이션 실행
  if (!isIPhone()) {
      animateImages(exclamationPoints);
      animateImages(quotations);
      startClock(); // 아이폰이 아닐 때 시계 시작
  }
});

function animateImages(images) {
  images.forEach(function(img) {
      const x = Math.random() * (window.innerWidth * 0.3 - img.offsetWidth);
      const y = Math.random() * (window.innerHeight - img.offsetHeight);
      const scale = 0.5 + Math.random() * 1; // 0.5 ~ 1.5 사이의 크기 변화
      const rotation = -50 + Math.random() * 100; // -50도에서 50도 사이의 회전 변화

      img.style.opacity = 1;
      img.style.transition = 'transform 3s ease-in-out, opacity 3s ease-in-out';
      img.style.transform = `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotation}deg)`;
  });
  setTimeout(() => animateImages(images), 3000); // 3초마다 애니메이션 반복
}

function isIPhone() {
  return /iPhone/.test(navigator.userAgent); // 아이폰을 감지하는 조건 수정
}

function startClock() {
    updateClock(); // 시계 시작
    setInterval(updateClock, 1000); // 1초마다 시계 업데이트
}

function updateClock() {
    var now = new Date();
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var month = months[now.getMonth()];
    var date = now.getDate();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 시간을 12 시간으로 설정
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var timeString = month + ' ' + date + ' ' + hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('clock').textContent = timeString;
}
