document.addEventListener('DOMContentLoaded', function () {
    const audio = new Audio('audio.mp3'); // Replace 'your-audio-file.mp3' with the path to your audio file

    // Toggle play/pause on background click
    document.body.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});