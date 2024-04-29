const audio = new Audio("audio.mp3");
let color = ["#a038f0"]
var video = document.querySelector(".video")
var eye = document.querySelector("#eye");
var nose = document.querySelector("#nose")
var ear = document.querySelector("#ear")
var hand = document.querySelector ("#hand")
var lips = document.querySelector ("#lips")

function music() {
  audio.play();
  document.body.style.backgroundSize = "initial";
  document.body.style.backgroundColor = "black";
  document.body.style.backgroundImage = "none";
  video.style.opacity = "0";

}

function feel() {
  audio.pause();
  document.body.style.backgroundSize = "cover"; // Change to cover to ensure the image covers the entire background
  document.body.style.backgroundImage = "url(feel.jpeg)";
  document.body.style.backgroundRepeat = "no-repeat"; // Remove repeat to avoid repeating the image
  video.style.opacity = "0";
}

function taste(){
  audio.pause();
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundImage = "url(food.png)";
  document.body.style.backgroundSize = "no-repeat";
  video.style.opacity = "0";
}

function sight(){
  audio.pause();
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundImage = "url(eye.gif)";
  document.body.style.backgroundSize = "no-repeat";
  video.style.opacity = "0";
}

function smell(){
  audio.pause();
  video.style.opacity = "1";
  document.body.style.backgroundSize = "initial";
  document.body.style.backgroundImage = "none";
}

eye.addEventListener("click", music);
nose.addEventListener("click", feel);
ear.addEventListener("click", taste);
hand.addEventListener("click", sight)
lips.addEventListener("click", smell);
