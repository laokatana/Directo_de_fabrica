const titulo = document.querySelector(".fade-title");
const parrafo = document.querySelector(".fade-paragraph");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 1, // % del elemento que debe estar visible
  }
);

observer.observe(titulo);
observer.observe(parrafo);
