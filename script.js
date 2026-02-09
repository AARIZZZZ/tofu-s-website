
const correctPassword = "0317";

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("error-msg");

  if (input === correctPassword) {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");
  } else {
    error.textContent = "Try again darlin";
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

window.addEventListener("load", () => {
  const modal = document.getElementById("video-modal");
  const video = document.getElementById("popup-video");

  document.querySelectorAll(".clickable").forEach(img => {
    img.addEventListener("click", () => {
      const src = img.getAttribute("data-video");
      video.src = src;
      modal.classList.remove("hidden");
      video.play();
    });
  });

  window.closeVideo = function () {
    video.pause();
    video.src = "";
    modal.classList.add("hidden");
  };
});


