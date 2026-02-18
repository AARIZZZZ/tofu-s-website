const correctPassword = "4utofu";

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("error-msg");

  if (input === correctPassword) {
   
    document.getElementById("password-screen").style.display = "none";

   
    document.getElementById("main-content").classList.remove("hidden");

   
    music.src = playlist[0];   
    music.play();              
  } else {
    error.textContent = "You got it wrong sweetheart!";
  }
}

function showSurprise() {
  document.getElementById("surprise-text").classList.remove("hidden");
}


const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "0.8s ease";
  observer.observe(card);
});

let modal, video;

window.addEventListener("load", () => {
  modal = document.getElementById("video-modal");
  video = document.getElementById("popup-video");

  document.querySelectorAll(".clickable").forEach(img => {
    img.addEventListener("click", () => {
      const src = img.getAttribute("data-video");
      video.src = src;
      modal.classList.remove("hidden");
      video.play();
    });
  });
});

function closeVideo() {
  video.pause();
  video.src = "";
  modal.classList.add("hidden");
}

const playlist = [
  "Sunsetz - Cigarettes After Sex.mp3",
  "Lovers Rock.mp3",
  "New West - Those Eyes.mp3"
];

let currentSong = 0;
const music = document.getElementById("bg-music");
const muteBtn = document.getElementById("mute-btn");

function playSong(index) {
  currentSong = index;
  music.src = playlist[currentSong];
  music.play();
  muteBtn.textContent = "🔊";
}

function toggleMusic() {
  if (music.paused) {
    music.play();
    muteBtn.textContent = "🔊";
  } else {
    music.pause();
    muteBtn.textContent = "🔇";
  }
}
