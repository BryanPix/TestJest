/**
 * @jest-environment jsdom
 */
const { fireEvent } = require("@testing-library/dom");
const { addButtonListeners } = require("../js/script");

describe("Boutons permettant de changer la couleur du fond d'écran.", () => {
  beforeEach(() => {
    // on recrée la structure HTML pour effectuer les tests car on a besoin de simuler le clique sur le bouton afin de changer la couleur du fond d'écran, le code HTML est injecté directement dans le DOM afin de simuler l'environnement html du vrai fichier index.html.
    document.body.innerHTML = `
      <button id="gray">Change to gray</button>
      <button id="red">Change to red</button>
      <button id="green">Change to green</button>
      <button id="yellow">Change to yellow</button>
      <button id="blue">Change to blue</button>
    `;

    // On appelle la fonction addButtonListeners() car on veut verifier que les boutons fonctionnes
    addButtonListeners();
  });

  test("Le clique sur le bouton gris change le fond d'écran en gris.", () => {
    const button = document.getElementById("gray");
    fireEvent.click(button);
    expect(getComputedStyle(document.body).backgroundColor).toBe(
      "rgb(128, 128, 128)"
    );
  });

  test("Le clique sur le bouton rouge change le fond d'écran en rouge.", () => {
    const button = document.getElementById("red");
    fireEvent.click(button);
    expect(getComputedStyle(document.body).backgroundColor).toBe(
      "rgb(255, 0, 0)"
    );
  });

  test("Le clique sur le bouton vert change le fond d'écran en vert.", () => {
    const button = document.getElementById("green");
    fireEvent.click(button);
    expect(getComputedStyle(document.body).backgroundColor).toBe(
      "rgb(0, 128, 0)"
    );
  });

  test("Le clique sur le bouton jaune change le fond d'écran en jaune.", () => {
    const button = document.getElementById("yellow");
    fireEvent.click(button);
    expect(getComputedStyle(document.body).backgroundColor).toBe(
      "rgb(255, 255, 0)"
    );
  });

  test("Le clique sur le bouton bleu change le fond d'écran en bleu.", () => {
    const button = document.getElementById("blue");
    fireEvent.click(button);
    expect(getComputedStyle(document.body).backgroundColor).toBe(
      "rgb(0, 0, 255)"
    );
  });
});
