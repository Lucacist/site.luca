const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        console.log("Element is visible:", entry.target);
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

// Sélectionner toutes les cases et commencer l'observation
document.querySelectorAll(".case").forEach((caseElement) => {
  observer.observe(caseElement);
});
