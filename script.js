// Modal do Currículo
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

// Formulário - mostrar/ocultar com máscara
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
  }, 500); // mesma duração da transição
}

// Áudio
function ajustarVolume(volume) {
  const audio = document.getElementById("myAudio");
  if (audio) audio.volume = volume;
}
ajustarVolume(0.5);

// Project Cards - IntersectionObserver + Hover
const projectCards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const video = entry.target.querySelector(".card-video");
      if (!video) return;

      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  },
  { threshold: 0.5 }
);

projectCards.forEach((card) => {
  const video = card.querySelector(".card-video");
  if (!video) return;

  card.addEventListener("mouseenter", () => video.play());
  card.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });

  observer.observe(card);
});

// Service Cards - Hover simples
const serviceCards = document.querySelectorAll(".card-flip");

serviceCards.forEach((card) => {
  const video = card.querySelector(".card-video");
  if (!video) return;

  card.addEventListener("mouseenter", () => video.play());
  card.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});

// Serviços - Expandir/Colapsar cards (caso use)
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

// Menu Mobile
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("nav button");
  const sections = document.querySelectorAll(".projects-section");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active de todos os botões
      buttons.forEach((b) => b.classList.remove("active"));
      // Adiciona active no botão clicado
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      sections.forEach((section) => {
        const category = section.getAttribute("data-category");
        if (filter === "all" || filter === category) {
          section.style.display = "block";
        } else {
          section.style.display = "none";
        }
      });
    });
  });
});

const btnFechar = document.getElementById('btnFecharModal');
const modalFecha = document.getElementById('fechaModal');

btnFechar.addEventListener('click', () => {
  modalFecha.style.display = 'none';
});

window.addEventListener('click', function(e) {
  if (e.target === modalFecha) {
    modalFecha.style.display = 'none';
  }
});
