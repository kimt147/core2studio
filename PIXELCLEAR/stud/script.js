document.addEventListener("DOMContentLoaded", () => {
  // Function to create falling trash elements
  function createFallingTrash() {
      const container = document.querySelector('.container');
      const trashArray = ['trash1.svg', 'trash2.svg', 'trash3.svg', 'trash4.svg', 'trash5.svg', 'trash6.svg'];

      // Randomly select one of the trash images
      const trash = document.createElement('img');
      trash.src = `imgs/${trashArray[Math.floor(Math.random() * trashArray.length)]}`;
      trash.classList.add('falling-trash');

      // Set random size, position, and top for the trash image
      trash.style.left = `${Math.random() * 100}vw`;
      trash.style.width = `${Math.random() * 2 + 2}rem`; // Random size between 1rem and 3rem
      trash.style.top = '0'; // Starts at the top of the screen

      // Add trash element to the container
      container.appendChild(trash);

      // Remove trash image after it falls out of view
      trash.addEventListener('animationend', () => {
          trash.remove();
      });
  }

  // Set an interval to create falling trash every 0.5 seconds
  setInterval(createFallingTrash, 500);

  // Display alert image after 3 seconds
  setTimeout(() => {
      // Create and display alert image
      const alertImage = document.createElement('img');
      alertImage.src = 'imgs/alert.png';
      alertImage.classList.add('notification-alert');
      document.body.appendChild(alertImage);

      // Play sound when alert image appears
      const audio = new Audio('sound.mp4');
      audio.play();

      // Add click event listener to navigate to the desired page
      alertImage.addEventListener('click', () => {
          window.location.href = '../studcopy/index.html';
      });
  }, 3000); // Display alert after 3 seconds
});
