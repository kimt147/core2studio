// 페이지 로드 시 카메라 시작
window.addEventListener('load', function() {
    const video = document.getElementById('video');
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
            video.srcObject = stream;
        }).catch(function(error) {
            console.log("Error: Cannot access camera");
        });
    }
});

document.getElementById('capture').addEventListener('click', function() {
    // 사진 찍기 전 2초 딜레이
    setTimeout(function() {
        takePicture();

        // "Capture" 버튼 숨기기 및 "Retake" 버튼 표시
        document.getElementById('capture').style.display = 'none';
        document.getElementById('retakeButton').style.display = 'block';
    }, 2000); // 2000 밀리초 = 2초 딜레이
});

document.getElementById('retakeButton').addEventListener('click', function() {
    // "Retake" 버튼을 클릭하면 카메라 다시 시작
    const video = document.getElementById('video');
    const photo = document.getElementById('photo');
    photo.src = ''; // 이전 사진 제거
    photo.classList.remove('grow-animation'); // 애니메이션 효과 제거

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
            video.srcObject = stream;
            video.play();
            document.getElementById('photoBooth').style.display = 'flex'; // 포토부스 다시 표시
            document.getElementById('capture').style.display = 'block'; // "Capture" 버튼 다시 표시
            document.getElementById('retakeButton').style.display = 'none'; // "Retake" 버튼 숨김
        }).catch(function(error) {
            console.log("Error: Cannot access camera");
        });
    }
});


function takePicture() {
    const video = document.getElementById('video');
    const photo = document.getElementById('photo');
    const photoBooth = document.getElementById('photoBooth');

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    photo.src = canvas.toDataURL('image/png');
    photo.classList.add('grow-animation'); // 애니메이션 클래스 추가
    photoBooth.style.display = 'none'; // 사진 찍은 후 포토부스 숨김

    // 플래시 효과
    const flash = document.createElement('div');
    flash.className = 'flash';
    document.body.appendChild(flash);
    flash.style.display = 'block';
    setTimeout(() => {
        flash.style.display = 'none';
        document.body.removeChild(flash);
    }, 50);

    // 카메라 스트림 정지
    if (video.srcObject) {
        video.srcObject.getTracks().forEach(track => track.stop());
    }
}

function startCountdown(duration) {
    let timer = duration, minutes, seconds;
    const countdownElement = document.getElementById('countdown');

    const interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        countdownElement.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            countdownElement.textContent = "0:00";
        }
    }, 1000);
}

// 카운트다운 시작 (2분)
startCountdown(120);
