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
  document.querySelector('.sidebar').classList.add('active');
}
function hideSidebar() {
  document.querySelector('.sidebar').classList.remove('active');
}

const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', () => {
  showSidebar();
} );
const menuCloser = document.querySelector('.menu-closer');
menuCloser.addEventListener('click', () => {
  hideSidebar();
} );
const sidebarLinks = document.querySelectorAll('.sidebar a');
sidebarLinks.forEach(link => {
  link.addEventListener('click', () => hideSidebar() );
});



