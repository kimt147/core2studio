document.addEventListener("DOMContentLoaded", function() {
  var apostrophe = document.querySelectorAll('.apostrophe');

  function animateImages(images) {
    images.forEach(function(img) {
      // 초기 위치를 화면의 오른쪽 끝으로 설정
      img.style.transform = `translateX(${window.innerWidth}px)`;

      // 잠시 후 이미지를 화면 내로 이동시키는 애니메이션 시작
      setTimeout(() => {
        const x = window.innerWidth * 0.5 + Math.random() * (window.innerWidth * 0.5 - img.offsetWidth);
        const y = Math.random() * (window.innerHeight - img.offsetHeight);
        const scale = 0.5 + Math.random() * 1; // 0.5 ~ 1.5 사이의 크기 변화
        const rotation = -50 + Math.random() * 100; // -50도에서 50도 사이의 회전 변화

        img.style.opacity = 1;
        img.style.transition = 'transform 3s ease-in-out, opacity 3s ease-in-out';
        img.style.transform = `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotation}deg)`;
      }, 100); // 애니메이션 지연 시작을 위해 setTimeout 사용
    });

    // 3초마다 애니메이션 반복
    setTimeout(() => animateImages(images), 3000);
  }

  // 애니메이션 실행
  animateImages(apostrophe);
});
