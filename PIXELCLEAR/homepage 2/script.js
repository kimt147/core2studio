document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('typing-title');

    // Remove blinking effect after typing animation ends
    title.addEventListener('animationend', () => {
        title.classList.add('blink-done'); // Stops blinking cursor
    });
});
