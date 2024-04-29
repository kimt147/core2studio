import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/mhy2dN9suxOU22B8/scene.splinecode');


document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.enlarge-container img');

    images.forEach(image => {
        image.addEventListener('click', function() {
            toggleEnlargeImage(image);
        });
    });

    function toggleEnlargeImage(image) {
        // 이미지의 현재 확대 상태를 확인
        const isEnlarged = image.classList.contains('enlarged');

        // 이미지가 확대된 상태라면 축소, 아니라면 확대
        if (isEnlarged) {
            shrinkImage(image);
        } else {
            if (image.classList.contains('about')) { // about.png를 클릭한 경우
                enlargeImage(image, 6); // about.png는 scale 8로 확대
            } else {
                enlargeImage(image, 3); // 나머지 이미지는 scale 3로 확대
            }
        }
    }

    function enlargeImage(image, scale) {
        // 이미지를 확대하는 로직을 추가하세요.
        image.classList.add('enlarged');
        image.style.transform = `scale(${scale})`;
        image.style.transition = 'transform 0.3s ease-in-out'; // 확대 트랜지션을 추가
        image.style.zIndex = '999'; // 가장 위에 표시하기 위해 z-index 설정
    }

    function shrinkImage(image) {
        // 이미지를 축소하는 로직을 추가하세요.
        image.classList.remove('enlarged');
        image.style.transform = 'scale(1)';
        image.style.transition = 'transform 0.3s ease-in-out'; // 축소 트랜지션을 추가
        image.style.zIndex = '2'; // 기본 z-index로 변경
    }

    // 이미지가 확대된 상태에서 다시 클릭하여 축소되도록 함
    images.forEach(image => {
        image.addEventListener('click', function(event) {
            if (event.detail === 2) {
                shrinkImage(image);
            }
        });
    });
});



