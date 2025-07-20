// Curriculo - Modal
const modal = document.getElementById("curriculoModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalSpan = document.querySelector(".close");

openModalBtn.addEventListener("click", () => (modal.style.display = "block"));
closeModalSpan.addEventListener("click", () => (modal.style.display = "none"));

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Formulário
const form = document.querySelector(".formulario-fale-conosco");
const mascara = document.querySelector(".mascara-formulario");

function mostrarForm() {
  form.style.left = "50%";
  form.style.transform = "translateX(-50%)";
  mascara.style.visibility = "visible";
}

function esconderForm() {
  form.style.left = "-300px";
  form.style.transform = "translateX(0)";
  mascara.style.visibility = "hidden";
}

// Áudio
function ajustarVolume(volume) {
  const audio = document.getElementById("myAudio");
  audio.volume = volume;
}
ajustarVolume(0.5);

// Portfólio - Vídeos hover e otimização com IntersectionObserver
const cards = document.querySelectorAll(".card-projeto");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const video = entry.target.querySelector(".video-bg");
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
  {
    threshold: 0.5,
  }
);

cards.forEach((card) => observer.observe(card));

// Serviços - Expandir/Colapsar cards

const readMoreLinks = document.querySelectorAll(".read-more");

readMoreLinks.forEach((link) => {
  const card = link.closest(".services-box");

  link.addEventListener("click", function (e) {
    e.preventDefault();
    card.classList.toggle("expanded");

    link.textContent = card.classList.contains("expanded")
      ? "Read Less"
      : "Read More";
  });
});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});


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
  }, 500); // tempo igual ao transition
}

  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    const video = card.querySelector('.project-card-video');

    card.addEventListener('mouseenter', () => {
      video.play();
    });

    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  });

// Portfólio - Filtro de projetos

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
