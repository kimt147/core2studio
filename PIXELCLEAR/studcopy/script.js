document.addEventListener("DOMContentLoaded", () => {
  // 3초 후에 alert.png와 sound.mp4를 동시에 실행
  setTimeout(() => {
    const alertImage = document.querySelector('.alert');
    
    // alert.png를 보이게 하기 위해 CSS에서 애니메이션을 트리거
    alertImage.style.display = 'block';

    // sound.mp4 소리 재생
    const audio = new Audio('sound.mp4'); // 사운드 파일 로드
    alertImage.addEventListener("animationstart", () => {
      audio.play().catch((error) => {
        console.log("Audio playback failed:", error);
      });
    });

    // alert.png 클릭 시 사라짐
    alertImage.addEventListener("click", () => {
      alertImage.style.display = 'none'; // alert 이미지 숨김
      const music = new Audio('imgs/music.mp4'); // music.mp4 파일 로드
      music.loop = true; // 반복 재생 설정
      music.play().catch((error) => {
        console.log("Music playback failed:", error);
      });

      // trash 이미지 클릭 이벤트 추가
      let trashCount = 9; // 남아있는 trash 이미지 개수

      for (let i = 1; i <= 9; i++) {
        const trash = document.querySelector(`.trash${i}`);
        trash.addEventListener("click", () => {
          // click.mp3 소리 재생
          const clickSound = new Audio('imgs/click.mp3');
          clickSound.play().catch((error) => {
            console.log("Click sound playback failed:", error);
          });

          // trash 이미지에 애니메이션 적용
          trash.classList.add('bounce');

          // 애니메이션 후 trash 이미지 제거 및 카운트 감소
          trash.addEventListener('animationend', () => {
            trash.remove();
            trashCount--;

            // 모든 trash가 사라지면 배경 이미지 변경 및 congrats.mp4, newalert.png 표시
            if (trashCount === 0) {
              // music.mp4 종료
              music.pause();
              music.currentTime = 0; // 재생 위치를 처음으로

              // 페이드 아웃 효과 적용
              document.body.style.transition = 'opacity 1.5s ease';
              document.body.style.opacity = '0';

              // 배경 이미지 변경 후 페이드 인 및 newalert.png와 congrats.mp4 표시
              setTimeout(() => {
                document.body.style.backgroundImage = "url('imgs/background.jpg')";
                document.body.style.opacity = '1';

                // newalert.png 이미지 생성 및 표시
                const newAlertImage = document.createElement('img');
                newAlertImage.src = 'imgs/newalert.png';
                newAlertImage.classList.add('new-alert'); // shakeFall 애니메이션 적용된 클래스
                document.body.appendChild(newAlertImage);

                // newalert.png 클릭 시 페이지 이동
                newAlertImage.addEventListener("click", () => {
                  window.location.href = '../homepage/index.html';
                });

                // congrats.mp4 소리 재생
                const congrats = new Audio('imgs/congrats.mp4');
                congrats.play().catch((error) => {
                  console.log("Congrats playback failed:", error);
                });
              }, 1500); // 페이드 아웃 시간에 맞춰서 배경 이미지 변경
            }
          });
        });
      }
    });
  }, 2000); // 3초 지연
});
