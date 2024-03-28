import { Application } from '@splinetool/runtime';

// Spline 3D 씬을 로드하는 부분
const canvas3d = document.getElementById('canvas3d');
const app = new Application(canvas3d);
app.load('https://prod.spline.design/EBtGQXEjUOgCUrKC/scene.splinecode');

class Star {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.maxBrightness = Math.random();
        this.brightness = Math.random();
        this.dimming = Math.random() < 0.5;
    }

    update() {
        if (this.dimming) {
            this.brightness -= 0.01;
            if (this.brightness < 0) {
                this.brightness = 0;
                this.dimming = false;
            }
        } else {
            this.brightness += 0.01;
            if (this.brightness > this.maxBrightness) {
                this.brightness = this.maxBrightness;
                this.dimming = true;
            }
        }
    }

    draw(ctx) {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.brightness})`;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}

const stars = [];

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('starCanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    function createStars(ctx, starCount) {
        const exclusionZoneVertical = 0.4; // 화면 아래쪽 40% 제외
        const exclusionZoneHorizontal = 0.4; // 중앙 40% 제외
        for (let i = 0; i < starCount; i++) {
            let x, y;
            // 아래쪽 exclusionZoneVertical 비율 만큼의 영역에서 별 생성 제외
            do {
                x = Math.random() * canvas.width;
                y = Math.random() * canvas.height;
            } while (canvas.height * (1 - exclusionZoneVertical) < y && 
                     (canvas.width * exclusionZoneHorizontal < x && x < canvas.width * (1 - exclusionZoneHorizontal)));
            const size = Math.random() * 2 + 1;
            stars.push(new Star(x, y, size));
        }
    }

    function animateStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(star => {
            star.update();
            star.draw(ctx);
        });
        requestAnimationFrame(animateStars);
    }

    createStars(ctx, 150); // 별 생성
    animateStars(); // 별 애니메이션 시작
});

// Spline 씬 크기와 위치 조정
function resizeCanvas3D() {
    canvas3d.style.width = window.innerWidth + 'px';
    canvas3d.style.height = window.innerHeight + 'px';
}

window.addEventListener('resize', resizeCanvas3D);
resizeCanvas3D();

app.load('https://prod.spline.design/EBtGQXEjUOgCUrKC/scene.splinecode').then(() => {
    canvas3d.style.position = 'absolute'; // Correct 'block' to 'absolute'
    canvas3d.style.zIndex = 1; // Ensure it's above the star canvas
});

// 페이지 이동을 부드럽게 처리하는 함수
function smoothPageTransition(event) {
    // 이벤트의 기본 동작(페이지 새로고침) 방지
    event.preventDefault();

    // 클릭된 링크의 href 속성 가져오기
    const targetUrl = event.currentTarget.getAttribute('href');

    // 페이지 이동 전에 애니메이션 등 부드러운 효과 적용 가능

    // 페이지 이동
    window.location.href = targetUrl;
}

// 페이지 내부의 링크에 대한 클릭 이벤트 리스너 추가
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', smoothPageTransition);
});

