gsap.registerPlugin(ScrollTrigger);

// Menú móvil
const hamburguer = document.getElementById("hamburguer");
const cerrar = document.getElementById("cerrar");
const menuResponsive = document.getElementById("menuResponsive");
const mobileLinks = document.querySelectorAll("#menuResponsive a");

if (hamburguer && menuResponsive) {
  hamburguer.addEventListener("click", () => {
    menuResponsive.classList.remove("hidden");
  });
}

if (cerrar && menuResponsive) {
  cerrar.addEventListener("click", () => {
    menuResponsive.classList.add("hidden");
  });
}

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuResponsive.classList.add("hidden");
  });
});

// Animaciones GSAP
gsap.from(".heroban .contenedor", {
  y: 35,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".quienes .textual", {
  x: -40,
  opacity: 0,
  duration: 0.9,
  scrollTrigger: {
    trigger: ".quienes",
    start: "top 80%",
    once: true
  }
});

gsap.from(".quienes .picture", {
  x: 40,
  opacity: 0,
  duration: 0.9,
  scrollTrigger: {
    trigger: ".quienes",
    start: "top 80%",
    once: true
  }
});

gsap.from(".bloqueMV", {
  y: 30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".misionVision",
    start: "top 80%",
    once: true
  }
});

gsap.from(".valores .card", {
  y: 30,
  opacity: 0,
  duration: 0.7,
  stagger: 0.12,
  scrollTrigger: {
    trigger: ".valores",
    start: "top 80%",
    once: true
  }
});

gsap.from(".municipioCard", {
  scale: 0.9,
  opacity: 0,
  duration: 0.6,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".impacto",
    start: "top 80%",
    once: true
  }
});

document.querySelectorAll(".gente .fila").forEach((fila) => {
  gsap.from(fila, {
    y: 40,
    opacity: 0,
    duration: 0.9,
    scrollTrigger: {
      trigger: fila,
      start: "top 82%",
      once: true
    }
  });
});