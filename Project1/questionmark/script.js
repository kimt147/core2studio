document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('.questionmark');

    function animateImages() {
        images.forEach(function(img) {
            // 화면의 왼쪽 절반에서만 랜덤 위치 결정
            const x = Math.random() * (window.innerWidth * 0.3 - img.offsetWidth);
            const y = Math.random() * (window.innerHeight - img.offsetHeight);

            // 랜덤 크기 (0.5 ~ 1.0 사이로 설정하여 더 미묘한 크기 변화 제공)
            const scale = 0.5 + Math.random() * 1;

            // 랜덤 회전 (더 섬세한 변화를 위해 -15도에서 15도 사이로 제한)
            const rotation = -50 + Math.random() * 60;

            // 이미지를 서서히 나타나게 함
            img.style.opacity = 1;

            // CSS 스타일 적용: transition 속성 조정
            img.style.transition = 'transform 3s ease-in-out, opacity 3s ease-in-out';
            img.style.transform = `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotation}deg)`;
        });

        // 매 3초마다 이미지 위치, 크기, 회전 각도 업데이트하여 더 자연스러운 움직임 유지
        setTimeout(animateImages, 3000);
    }

    // 초기 애니메이션 시작
    animateImages();

    document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
      
        const gradientCenterX = (mouseX / window.innerWidth) * 100;
        const gradientCenterY = (mouseY / window.innerHeight) * 100;
      
        const revealedArea = document.querySelector(".revealed-area");
        revealedArea.style.background = `radial-gradient(
          circle 280px at ${gradientCenterX}% ${gradientCenterY}%,
          transparent 10%,
          rgba(0, 0, 0, 0.98)
        )`;
      });

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
        setTimeout(updateClock, 1000); // 1 초마다 시계 업데이트
    }
    updateClock(); // 페이지가 로드 될 때 시계 업데이트 시작
    
    
});
