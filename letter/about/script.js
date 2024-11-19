// Typewriter effect
const text = "HEY, IT’S ME BRINGS BACK THE CHARM OF HANDWRITTEN LETTERS WITH A DIGITAL TOUCH. FROM THE SOUND OF PENCIL STROKES TO THE RUSTLE OF PAPER, EVERY DETAIL MAKES UNFORGETTABLE.";
const aboutTextContainer = document.getElementById("aboutText");
const typingBar = document.querySelector(".typing-bar");
const mainImage = document.getElementById("mainImage");
const typingAudio = document.getElementById("typingAudio"); // Audio element
let index = 0;

// Ensure the container is relatively positioned
aboutTextContainer.style.position = "relative";

function updateTypingBarPosition() {
  const tempSpan = document.createElement("span");
  tempSpan.textContent = text.charAt(index) || "\u200b"; // Zero-width space if at the end
  tempSpan.style.visibility = "hidden"; // Hide the temporary span from view
  aboutTextContainer.appendChild(tempSpan);

  const rect = tempSpan.getBoundingClientRect();
  const containerRect = aboutTextContainer.getBoundingClientRect();

  typingBar.style.top = `${rect.top - containerRect.top}px`;
  typingBar.style.left = `${rect.left - containerRect.left}px`;

  aboutTextContainer.removeChild(tempSpan);
}

function typeWriterEffect() {
  // Play typing audio immediately on page load
  if (typingAudio.paused) {
    typingAudio.play();
  }

  if (index < text.length) {
    aboutTextContainer.textContent += text.charAt(index); // Add the next character
    index++;

    // Recalculate and update typing bar position
    updateTypingBarPosition();

    setTimeout(typeWriterEffect, 60); // Typing speed
  } else {
    // Typing animation complete
    typingBar.style.display = "none"; // Hide the typing bar
    typingAudio.pause(); // Stop audio when typing is done
    typingAudio.currentTime = 0; // Reset audio playback position

    setTimeout(() => {
      mainImage.classList.remove("hidden");
      mainImage.classList.add("visible"); // Show the main image
    }, 500); // Delay before showing the image
  }
}

window.onload = typeWriterEffect;
