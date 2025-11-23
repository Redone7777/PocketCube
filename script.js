import RubiksCube from './js/RubiksCube.js';

// Initialisation de l'application
document.addEventListener('DOMContentLoaded', () => {
    const scrambleBtn = document.getElementById('scramble-btn');
    const solveBtn = document.getElementById('solve-btn');
    const resetBtn = document.getElementById('reset-btn');
    const cubeContainer = document.querySelector('.cube-area');

    // Créer une instance du Rubik's Cube
    const rubiksCube = new RubiksCube();
    rubiksCube.render(cubeContainer);

    if (scrambleBtn) {
        scrambleBtn.addEventListener('click', () => {
            console.log('Bouton "Mélanger" cliqué.');
            rubiksCube.scramble(20);
            console.log('État du cube:', rubiksCube.getState());
        });
    }

    if (solveBtn) {
        solveBtn.addEventListener('click', () => {
            console.log('Bouton "Résoudre" cliqué.');
            rubiksCube.solve();
            console.log('Résolution du cube avec algorithme.');
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            console.log('Bouton "Réinitialiser" cliqué.');
            rubiksCube.reset();
            console.log('Cube réinitialisé à l\'état résolu!');
        });
    }

    console.log('Interface du solveur de Rubik\'s Cube initialisée.');
    console.log('Cube 2x2 créé avec architecture orientée objet.');
});