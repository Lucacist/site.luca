// Fonction pour animer l'affichage du placeholder lettre par lettre
function animatePlaceholder(inputId, placeholderText) {
  const input = document.getElementById(inputId);
  let currentIndex = 0;

  // Vider le placeholder au début
  input.placeholder = "";

  // Fonction pour afficher chaque lettre une par une
  const interval = setInterval(() => {
    if (currentIndex < placeholderText.length) {
      input.placeholder += placeholderText[currentIndex];
      currentIndex++;
    } else {
      clearInterval(interval); // Stoppe l'interval une fois le texte complet affiché
      setTimeout(() => {
        animatePlaceholder(inputId, placeholderText); // Relance l'animation
      }, 3000); // Attendre 1 seconde avant de relancer l'animation
    }
  }, 150); // Temps entre chaque lettre (ajuste cette valeur pour plus ou moins de rapidité)
}

// Lancer l'animation pour chaque champ
window.onload = function () {
  animatePlaceholder("email", "Entrez votre Email"); // Email
  animatePlaceholder("message", "Entrez votre message"); // Message
};
