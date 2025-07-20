// Menu Hamburguer
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  hamburger.classList.toggle("active");
});


// Cards de Serviços - Vídeo no Hover
const serviceCards = document.querySelectorAll(".flip-card");

serviceCards.forEach((card) => {
  const video = card.querySelector(".card-video");
  card.addEventListener("mouseenter", () => video.play());
  card.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});

// Cards de Projeto - Vídeo com IntersectionObserver
const projectCards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const video = entry.target.querySelector(".project-card-video");
      if (!video) return;

      if (entry.isIntersecting) {
        entry.target.addEventListener("mouseenter", () => video.play());
        entry.target.addEventListener("mouseleave", () => {
          video.pause();
          video.currentTime = 0;
        });
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  },
  { threshold: 0.5 }
);

projectCards.forEach((card) => observer.observe(card));

// Modal do Currículo
const modal = document.getElementById("curriculoModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalSpan = document.querySelector(".close");

openModalBtn?.addEventListener("click", () => {
  modal.style.display = "block";
});
closeModalSpan?.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Formulário - Mostrar e Esconder
const form = document.querySelector(".formulario-fale-conosco");
const mascara = document.querySelector(".mascara-formulario");

function mostrarForm() {
  form.style.left = "50%";
  form.style.transform = "translateX(-50%)";
  mascara.style.visibility = "visible";
  mascara.style.opacity = "1";
}

function esconderForm() {
  form.style.left = "-550px";
  form.style.transform = "translateX(0)";
  mascara.style.opacity = "0";
  setTimeout(() => {
    mascara.style.visibility = "hidden";
  }, 500);
}

// Áudio - Volume inicial
function ajustarVolume(volume) {
  const audio = document.getElementById("myAudio");
  if (audio) audio.volume = volume;
}
ajustarVolume(0.5);


// projeto.html - Ajuste de Background

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("nav button");
  const sections = document.querySelectorAll(".projects-section");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active de todos
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      sections.forEach(section => {
        if (filter === "all") {
          section.style.display = "block";
        } else {
          section.style.display = section.getAttribute("data-category") === filter ? "block" : "none";
        }
      });
    });
  });
});

