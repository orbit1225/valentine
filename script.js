"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5; // Maximum number of "No" responses before stopping

let play = true;
let noCount = 0;

// Event listener for the "Yes" button
yesButton.addEventListener("click", handleYesClick);

// Event listener for the "No" button
noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    console.log("No button clicked:", noCount); // Debugging log

    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex); // Change image based on noCount
    resizeYesButton(); // Make "Yes" button bigger
    updateNoButtonText(); // Change text of "No" button

    if (noCount === MAX_IMAGES) {
      play = false; // Stop further interactions after max limit
    }
  }
});

// Function to handle "Yes" click event
function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

// Function to increase "Yes" button size
function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;
  yesButton.style.fontSize = `${newFontSize}px`;
}

// Function to change the cat image
function changeImage(image) {
  const imagePath = `img/${image}.jpg?${new Date().getTime()}`; // Prevents caching issues
  console.log("Loading image:", imagePath); // Debugging log
  catImg.src = imagePath;
  catImg.onerror = function () {
    console.error("Error loading image:", imagePath);
  };
}

// Function to generate new "No" button text
function generateMessage(noCount) {
  const messages = [
    "No",
    "Are you sure Ekru?",
    "Please Ekra 🥺",
    "Aunt k bole dibo :(",
    "Kuch to daya karo 🥹",
    "Kanna kore vashay dibo ekhon Ekruuu...",
  ];

  return messages[Math.min(noCount, messages.length - 1)];
}

// Function to update "No" button text
function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
