"use strict";

function playSound() {
  const  audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (!audio) return;

  // apply class .playing to the div element with the same data-key as the audio file
  const letter = document.querySelector(`div[data-key="${event.keyCode}"]`);
  letter.classList.add("playing");
  // makes sure the audio is starting at the beginning of audio file
  audio.currentTime = 0;

  audio.play();
}

function removeTransition(event) {
  if (!event.propertyName === "transform") return;
  event.target.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", event => {
  playSound();
});
