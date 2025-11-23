// Classe représentant un sticker individuel du Rubik's Cube
class Cube {
    constructor(color, position) {
        this.color = color;
        this.position = position; // {face: 'front', index: 0}
        this.element = null;
    }

    // Créer l'élément DOM pour ce sticker
    createElement() {
        const div = document.createElement('div');
        div.className = `sticker ${this.color}`;
        div.dataset.face = this.position.face;
        div.dataset.index = this.position.index;
        this.element = div;
        return div;
    }

    // Changer la couleur du sticker
    setColor(newColor) {
        this.color = newColor;
        if (this.element)
            this.element.className = `sticker ${newColor}`;

    }

    // Obtenir la couleur actuelle
    getColor() {
        return this.color;
    }
}

// Exporter la classe pour pouvoir l'utiliser dans d'autres fichiers
export default Cube;
