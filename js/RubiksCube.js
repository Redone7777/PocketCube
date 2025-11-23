// Importer la classe Cube
import Cube from './Cube.js';

// Classe représentant le Rubik's Cube 2x2 complet
class RubiksCube {
    constructor() {
        this.faces = {
            top: [],
            left: [],
            front: [],
            right: [],
            back: [],
            bottom: []
        };

        this.colorMap = {
            top: 'white',
            left: 'orange',
            front: 'green',
            right: 'red',
            back: 'blue',
            bottom: 'yellow'
        };

        this.initialize();
    }

    // Initialiser le cube à l'état résolu
    initialize() {
        Object.keys(this.faces).forEach(faceName => {
            this.faces[faceName] = [];
            const color = this.colorMap[faceName];

            // Créer 4 stickers pour chaque face (2x2)
            for (let i = 0; i < 4; i++) {
                const cube = new Cube(color, { face: faceName, index: i });
                this.faces[faceName].push(cube);
            }
        });
    }

    // Rendre le cube dans le DOM
    render(container) {
        container.innerHTML = `
            <div class="cube-2d">
                <div class="face face-top" data-face="top"></div>
                <div class="face-row">
                    <div class="face face-left" data-face="left"></div>
                    <div class="face face-front" data-face="front"></div>
                    <div class="face face-right" data-face="right"></div>
                    <div class="face face-back" data-face="back"></div>
                </div>
                <div class="face face-bottom" data-face="bottom"></div>
            </div>
        `;

        // Ajouter les stickers à chaque face
        Object.keys(this.faces).forEach(faceName => {
            const faceElement = container.querySelector(`[data-face="${faceName}"]`);
            this.faces[faceName].forEach(cube => {
                faceElement.appendChild(cube.createElement());
            });
        });
    }

    // Mélanger le cube (version simple - couleurs aléatoires)
    scrambleSimple() {
        const colors = Object.values(this.colorMap);
        Object.values(this.faces).forEach(face => {
            face.forEach(cube => {
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                cube.setColor(randomColor);
            });
        });
    }

    // Mélanger avec des mouvements réels
    scramble(moves = 10) {
        const possibleMoves = ['R', 'R\'', 'U', 'U\'', 'F', 'F\''];
        for (let i = 0; i < moves; i++) {
            const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
            this.executeMove(randomMove);
        }
    }

    // Réinitialiser le cube à l'état résolu (retour à zéro)
    reset() {
        // Réinitialiser toutes les faces
        Object.keys(this.faces).forEach(faceName => {
            const correctColor = this.colorMap[faceName];
            this.faces[faceName].forEach(cube => {
                cube.setColor(correctColor);
            });
        });
    }

    // Résoudre le cube avec un algorithme (à implémenter)
    solve() {
        // TODO: Implémenter l'algorithme de résolution
        console.log('Algorithme de résolution à implémenter...');
    }

    // Exécuter un mouvement
    executeMove(move) {
        switch (move) {
            case 'R':
                this.rotateRight();
                break;
            case 'R\'':
                this.rotateRightPrime();
                break;
            case 'U':
                this.rotateUp();
                break;
            case 'U\'':
                this.rotateUpPrime();
                break;
            case 'F':
                this.rotateFront();
                break;
            case 'F\'':
                this.rotateFrontPrime();
                break;
        }
    }

    // Rotation de la face droite (horaire)
    rotateRight() {
        // Sauvegarder les couleurs avant rotation
        const temp = [
            this.faces.top[1].getColor(),
            this.faces.top[3].getColor()
        ];

        // Top -> Back
        this.faces.top[1].setColor(this.faces.front[1].getColor());
        this.faces.top[3].setColor(this.faces.front[3].getColor());

        // Front -> Bottom
        this.faces.front[1].setColor(this.faces.bottom[1].getColor());
        this.faces.front[3].setColor(this.faces.bottom[3].getColor());

        // Bottom -> Back
        this.faces.bottom[1].setColor(this.faces.back[2].getColor());
        this.faces.bottom[3].setColor(this.faces.back[0].getColor());

        // Back -> Top (avec inversion)
        this.faces.back[0].setColor(temp[1]);
        this.faces.back[2].setColor(temp[0]);

        // Rotation de la face droite elle-même
        this.rotateFaceClockwise(this.faces.right);
    }

    rotateRightPrime() {
        // 3 rotations horaires = 1 anti-horaire
        this.rotateRight();
        this.rotateRight();
        this.rotateRight();
    }

    rotateUp() {
        const temp = [
            this.faces.front[0].getColor(),
            this.faces.front[1].getColor()
        ];

        this.faces.front[0].setColor(this.faces.right[0].getColor());
        this.faces.front[1].setColor(this.faces.right[1].getColor());

        this.faces.right[0].setColor(this.faces.back[0].getColor());
        this.faces.right[1].setColor(this.faces.back[1].getColor());

        this.faces.back[0].setColor(this.faces.left[0].getColor());
        this.faces.back[1].setColor(this.faces.left[1].getColor());

        this.faces.left[0].setColor(temp[0]);
        this.faces.left[1].setColor(temp[1]);

        this.rotateFaceClockwise(this.faces.top);
    }

    rotateUpPrime() {
        this.rotateUp();
        this.rotateUp();
        this.rotateUp();
    }

    rotateFront() {
        const temp = [
            this.faces.top[2].getColor(),
            this.faces.top[3].getColor()
        ];

        this.faces.top[2].setColor(this.faces.left[3].getColor());
        this.faces.top[3].setColor(this.faces.left[1].getColor());

        this.faces.left[1].setColor(this.faces.bottom[0].getColor());
        this.faces.left[3].setColor(this.faces.bottom[2].getColor());

        this.faces.bottom[0].setColor(this.faces.right[2].getColor());
        this.faces.bottom[2].setColor(this.faces.right[0].getColor());

        this.faces.right[0].setColor(temp[0]);
        this.faces.right[2].setColor(temp[1]);

        this.rotateFaceClockwise(this.faces.front);
    }

    rotateFrontPrime() {
        this.rotateFront();
        this.rotateFront();
        this.rotateFront();
    }

    // Rotation d'une face sur elle-même (horaire)
    rotateFaceClockwise(face) {
        const temp = face[0].getColor();
        face[0].setColor(face[2].getColor());
        face[2].setColor(face[3].getColor());
        face[3].setColor(face[1].getColor());
        face[1].setColor(temp);
    }

    // Obtenir l'état actuel du cube
    getState() {
        const state = {};
        Object.keys(this.faces).forEach(faceName => {
            state[faceName] = this.faces[faceName].map(cube => cube.getColor());
        });
        return state;
    }
}

// Exporter la classe RubiksCube
export default RubiksCube;
