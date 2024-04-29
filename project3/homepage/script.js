document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.info, .ash, .ball, .letter');

    images.forEach(function (image) {
        image.addEventListener('click', function () {
            image.classList.toggle('enlarged');
        });
    });
});

