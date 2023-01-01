const paragraph = document.querySelector(".text p");
const speedInput = document.querySelector("#speed");
const text = "we love programming!";

const characters = text.split("");
let currentChar = 0;
let speed = 500 / speedInput.value;

speedInput.addEventListener("input", (e) => {
  speed = 500 / e.target.value;
});

function autoTextEffect() {
  paragraph.innerHTML += text[currentChar];
  currentChar++;

  if (currentChar > characters.length) {
    currentChar = 0;
    paragraph.innerHTML = "";
  }
  setTimeout(autoTextEffect, speed);
}

autoTextEffect();
