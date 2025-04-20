// effects-scroll.js

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[data-sfx]");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const effect = el.dataset.sfx;
        el.classList.add("sfx-animated", `sfx-${effect}`);
        observer.unobserve(el); // Solo animar una vez
      }
    });
  }, {
    rootMargin: "0px 0px -10% 0px", // Ajusta el margen para disparar un poco antes
    threshold: 0.1
  });

  elements.forEach((el) => {
    observer.observe(el);
  });
});
