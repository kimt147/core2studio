document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.about, .ash, .card, .pikachu, .pokeball');

    images.forEach(function (image) {
        image.addEventListener('click', function () {
            image.classList.toggle('enlarged'); // 클래스 토글 시 enlarged 클래스를 사용하도록 변경
        });
    });
});
