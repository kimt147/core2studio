document.addEventListener("DOMContentLoaded", () => {
    const amountSelect = document.getElementById("amount");
    const customAmountDiv = document.getElementById("custom-amount");
    const creditButton = document.querySelector(".credit-btn");
    const creditCardForm = document.querySelector(".credit-card-form");

    // Show custom amount input if "Other" is selected
    amountSelect.addEventListener("change", () => {
        customAmountDiv.style.display = amountSelect.value === "other" ? "block" : "none";
    });

    // Show credit card form when the Credit Card button is clicked
    creditButton.addEventListener("click", () => {
        creditCardForm.style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // List of image sources
    const images = [
        { img: 'imgs/image1.jpg', pixel: 'imgs/imagepixel1.png' },
        { img: 'imgs/image2.jpg', pixel: 'imgs/imagepixel2.png' },
        { img: 'imgs/image3.jpg', pixel: 'imgs/imagepixel3.png' },
        { img: 'imgs/image4.jpg', pixel: 'imgs/imagepixel4.png' },
        { img: 'imgs/image5.jpg', pixel: 'imgs/imagepixel5.png' },
        { img: 'imgs/image11.JPG', pixel: 'imgs/imagepixel11.png' },
        { img: 'imgs/image12.JPG', pixel: 'imgs/imagepixel12.png' },
        { img: 'imgs/image8.jpg', pixel: 'imgs/imagepixel8.png' },
        { img: 'imgs/image9.jpg', pixel: 'imgs/imagepixel9.png' },
        { img: 'imgs/image10.jpg', pixel: 'imgs/imagepixel10.png' }
    ];

    // Select a random image
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // Select the random image container
    const randomImageContainer = document.querySelector('.random-image');

    // Set the main image as background
    randomImageContainer.style.backgroundImage = `url('${randomImage.img}')`;

    // Set the pixelated overlay as the :before background-image using CSS
    const styleSheet = document.createElement("style");
    styleSheet.innerHTML = `
        .random-image:before {
            background-image: url('${randomImage.pixel}');
        }
    `;
    document.head.appendChild(styleSheet);
});
