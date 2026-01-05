// animação simples ao rolar
const elements = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

elements.forEach(el => observer.observe(el));



const header = document.querySelector('.header');
let lastScroll = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  // muda fundo ao rolar
  if (currentScroll > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // esconde ao descer / mostra ao subir
  if (currentScroll > lastScroll && currentScroll > 120) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }

  lastScroll = currentScroll;
});



// animação de entrada do hero
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    el.classList.add("active");
  });
});

const scrollElements = document.querySelectorAll(".reveal-scroll");

const scrollObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.2 }
);

scrollElements.forEach(el => scrollObserver.observe(el));

// navegação suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// menu hamburger
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (!menuToggle || !nav) return;

  const icon = menuToggle.querySelector("i");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
      icon.classList.replace("ri-menu-line", "ri-close-line");
      document.body.style.overflow = "hidden";
    } else {
      icon.classList.replace("ri-close-line", "ri-menu-line");
      document.body.style.overflow = "";
    }
  });

  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      icon.classList.replace("ri-close-line", "ri-menu-line");
      document.body.style.overflow = "";
    });
  });
});
