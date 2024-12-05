document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('typing-title');

    // Remove blinking cursor after typing animation ends
    title.addEventListener('animationend', () => {
        title.classList.add('blink-done'); // Remove blinking effect
    });
});
