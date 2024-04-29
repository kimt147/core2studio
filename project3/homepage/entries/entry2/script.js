// script.js
document.addEventListener("DOMContentLoaded", function() {
    const musicPlayer = document.getElementById("musicplayer");
    let isPlaying = false;

    document.addEventListener("click", function() {
        if (isPlaying) {
            musicPlayer.pause();
        } else {
            musicPlayer.play();
        }

        isPlaying = !isPlaying;
    });
});
