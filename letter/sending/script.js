const sendingImage = document.getElementById("sendingImage");
const sendingText = document.getElementById("sendingText");
const sentAudio = document.getElementById("sentAudio");

// Set GIF duration (in milliseconds)
const gifDuration = 1000; // Assuming the GIF takes 1 second to loop
const loopCount = 10; // Number of times to loop

// Calculate total duration
const totalDuration = gifDuration * loopCount;

// Change image, text, and play audio after the GIF has looped 10 times
setTimeout(() => {
  // Add fade-out effect
  sendingImage.classList.add("fade-out");
  sendingText.classList.add("fade-out");

  setTimeout(() => {
    // Change image and text after fade-out
    sendingImage.src = "./imgs/sent.png"; // Change GIF to sent.png
    sendingText.textContent = "Your letter is delivered!";

    // Add fade-in effect
    sendingImage.classList.remove("fade-out");
    sendingImage.classList.add("fade-in");
    sendingText.classList.remove("fade-out");
    sendingText.classList.add("fade-in");

    // Play sent audio
    sentAudio.play();
  }, 1000); // Wait for fade-out to complete (1 second)
}, totalDuration);
