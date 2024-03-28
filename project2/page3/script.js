async function fetchImageData() {
  try {
      const response = await fetch('data.json');
      const imageData = await response.json();
      return imageData;
  } catch (error) {
      console.error("Error loading image data:", error);
      return [];
  }
}

let imageData = [];
let currentIndex = 0;
let slideshowIntervalId;
const slideshowInterval = 100; // 이미지 변경 간격 (ms)

document.addEventListener('DOMContentLoaded', async () => {
  imageData = await fetchImageData();
  startSlideshow();
});

function startSlideshow() {
  slideshowIntervalId = setInterval(() => {
      showNextImage();
  }, slideshowInterval);
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % imageData.length;
  const randomImageData = imageData[currentIndex];
  const imageElement = document.getElementById('random-image');
  imageElement.src = `./imgs/${currentIndex + 1}.JPG`;

  const imageInfo = document.getElementById('image-info');
  imageInfo.innerHTML = `
      <p><strong>When:</strong> ${randomImageData.When}</p>
      <p><strong>Time:</strong> ${randomImageData.Time}</p>
      <p><strong>Where:</strong> ${randomImageData.Where}</p>
      <p><strong>Where:</strong> ${randomImageData.What}</p>
  `;
}

document.getElementById('random-image').addEventListener('mouseenter', () => {
  clearInterval(slideshowIntervalId);
});

document.getElementById('random-image').addEventListener('mouseleave', () => {
  startSlideshow();
});
