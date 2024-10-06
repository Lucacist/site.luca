// curseur.js

var cursorTimeout;

function hideCursor() {
  document.documentElement.style.cursor = "none";
  document.getElementById("custom-color").style.opacity = "0.3"; // Ajustez la valeur d'opacité selon vos préférences
}

function resetCursorTimeout() {
  clearTimeout(cursorTimeout);
  document.documentElement.style.cursor = "auto";
  document.getElementById("custom-color").style.opacity = "1"; // Rétablir l'opacité
  cursorTimeout = setTimeout(hideCursor, 2000); // Masquer le curseur après 3 secondes d'inactivité
}

document.addEventListener("DOMContentLoaded", function () {
  resetCursorTimeout();

  document.addEventListener("mousemove", function () {
    resetCursorTimeout();
  });

  document.addEventListener("mouseenter", function () {
    document.documentElement.style.cursor = "auto";
  });

  // Modification des couleurs
  document
    .getElementById("fond-parent-color")
    .addEventListener("input", function (e) {
      document.documentElement.style.setProperty(
        "--fond-parent-color",
        e.target.value
      );
    });

  document.getElementById("line-color").addEventListener("input", function (e) {
    document.documentElement.style.setProperty("--line-color", e.target.value);
  });
});
