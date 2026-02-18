const correctPassword = "4utofu";
let music;
let wasPlaying = false;

const playlist = [
  "Sunsetz - Cigarettes After Sex.mp3",
  "Lovers Rock.mp3",
  "New West - Those Eyes.mp3"
];

document.addEventListener("DOMContentLoaded", () => {
  music = document.getElementById("bg-music");
  music.src = playlist[0];

  const noBtn = document.getElementById("no-btn");

  noBtn.addEventListener("mouseenter", moveNoButton);
  noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveNoButton();
  });
});

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  if (input === correctPassword) {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");
    music.play().catch(()=>{});
  } else {
    document.getElementById("error-msg").textContent =
      "You got it wrong sweetheart!";
  }
}

function showSurprise() {
  document.getElementById("surprise-text").classList.remove("hidden");
}

function answerYes() {
  const response = document.getElementById("answer-response");
  response.textContent =
    "That’s all I needed to hear :) Come here, you.";
  response.classList.remove("hidden");
}

function moveNoButton() {
  const btn = document.getElementById("no-btn");
  const container = document.querySelector(".question-buttons");
  const maxX = container.offsetWidth - btn.offsetWidth;
  const randomX = Math.random() * maxX;

  btn.style.position = "absolute";
  btn.style.left = randomX + "px";
  btn.style.top = "20px";
}

function playSong(index) {
  music.src = playlist[index];
  music.play();
}

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

function closeVideo() {
  const modal = document.getElementById("video-modal");
  const video = document.getElementById("popup-video");

  video.pause();
  video.src = "";
  modal.classList.add("hidden");

  if (wasPlaying) {
    music.play();
  }
}

/* Pause music when video opens */
document.addEventListener("click", function(e) {
  if (e.target.classList.contains("clickable")) {
    const modal = document.getElementById("video-modal");
    const video = document.getElementById("popup-video");

    video.src = e.target.getAttribute("data-video");
    modal.classList.remove("hidden");

    wasPlaying = !music.paused;
    music.pause();

    video.play();
  }
});
