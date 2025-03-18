function addButtonListeners() {
  let btnGray = document.getElementById("gray");
  let btnRed = document.getElementById("red");
  let btnGreen = document.getElementById("green");
  let btnYellow = document.getElementById("yellow");
  let btnBlue = document.getElementById("blue");

  btnGray.addEventListener("click", function () {
    document.body.style.setProperty("background-color", "rgb(128, 128, 128)");
  });
  btnRed.addEventListener("click", function () {
    document.body.style.setProperty("background-color", "rgb(255, 0, 0)");
  });
  btnGreen.addEventListener("click", function () {
    document.body.style.setProperty("background-color", "rgb(0, 128, 0)");
  });
  btnYellow.addEventListener("click", function () {
    document.body.style.setProperty("background-color", "rgb(255, 255, 0)");
  });
  btnBlue.addEventListener("click", function () {
    document.body.style.setProperty("background-color", "rgb(0, 0, 255)");
  });
}

// Permet d'exporter le module seulement lorsque l'on fait des tests, lorsque l'on execute le code dans le navigateur le module n'est pas chargé
// Solution à un problème venant du fait que lorsque l'on mets le module.exports et que l'on execute le code dans le navigateur les boutons ne fonctionnes pas, et quand on ne mets pas le module.exports les tests ne fonctionnes pas,
// Bien entendu les tests sont temporaires et ce genre de solutions n'est pas utile sachant que j'aurais du les supprimer à la fin.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { addButtonListeners };
}
