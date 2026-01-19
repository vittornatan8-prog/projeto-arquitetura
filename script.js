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
// menu mobile
function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  sidebar.style.display = 'block';
  overlay.style.display = 'block';
}
function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  sidebar.style.display = 'none';
  overlay.style.display = 'none';
}
document.querySelector('.menu-toggle').addEventListener('click', showSidebar);
document.querySelector('.overlay').addEventListener('click', hideSidebar);
