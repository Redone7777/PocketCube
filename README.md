# KubeStar 4.2

Un solveur 3D basé sur IDA* pour le Rubik's Cube 4x2 avec interface web moderne.

## 📋 Description

KubeStar 4.2 est un projet de visualisation et de résolution du Rubik's Cube 4x2. Le développement commence par un Rubik's Cube 2x2 pour comprendre les principes de base, avant de passer au cube 4x2 complet.

## ✅ Interface Web (2x2 - Apprentissage)

### Ce qui a été réalisé :

- ✨ **Interface moderne avec effet Glassmorphism**
  - Palette de couleurs sombre (#1a1a1a, #2a2a2a, #333333)
  - Accents orange (#ff8c42) pour un look professionnel
  - Effets de lueur et ombres portées

- 🎨 **Structure responsive**
  - Layout Flexbox avec zone cube et panneau de contrôles
  - Animations et transitions fluides
  - Design adaptatif mobile (media queries)

- 🔘 **Boutons interactifs avec icônes**
  - Mélanger (icône shuffle)
  - Résoudre (icône lightbulb)  
  - Réinitialiser (icône rotate-left)
  - Effets hover avec translateY et box-shadow

- 🎲 **Visualisation 2D du cube**
  - Représentation dépliée des 6 faces
  - 24 stickers colorés (4 par face)
  - Couleurs authentiques du Rubik's Cube
  - Effets hover sur les stickers

- ⚙️ **Architecture orientée objet**
  - Classe `Cube` : gestion des stickers individuels
  - Classe `RubiksCube` : logique du cube complet
  - Modules ES6 avec import/export
  - Séparation claire des responsabilités

- 🔄 **Logique de rotation**
  - Mouvements R, R', U, U', F, F' implémentés
  - Rotation des faces et mise à jour des stickers adjacents
  - Algorithme de rotation horaire/anti-horaire

- 🎰 **Fonctionnalités interactives**
  - Mélange aléatoire avec mouvements réels (20 moves)
  - Réinitialisation à l'état résolu
  - Récupération de l'état actuel du cube

### Technologies utilisées :
- HTML5
- CSS3 (Variables CSS, Grid, Flexbox, Animations)
- JavaScript ES6+ (Classes, Modules, DOM manipulation)
- Google Fonts (Poppins)
- Font Awesome 6.5.1

## 🚀 Prochaines étapes

#### Algorithme IDA*
- [ ] Implémentation de l'algorithme de recherche IDA*
- [ ] Fonction heuristique optimisée
- [ ] Résolution optimale du cube 2x2

#### Visualisation 3D
- [ ] Intégration Three.js pour rendu 3D
- [ ] Animation 3D des rotations
- [ ] Contrôles caméra interactifs

#### Mouvements additionnels
- [ ] Implémentation L, L', D, D', B, B'
- [ ] Double rotations (R2, U2, etc.)
- [ ] Animation visuelle des mouvements

#### Passage au Cube 4x2
- [ ] Adaptation de l'interface pour le 4x2
- [ ] Algorithmes optimisés pour la taille supérieure
- [ ] Nouveaux défis de résolution

## 📂 Structure du projet

```
KubeStar4.2/
├── README.md
└── RubiksCube2x2/
    ├── index.html          # Interface principale
    ├── style.css           # Styles et animations
    ├── script.js           # Point d'entrée
    └── js/
        ├── Cube.js         # Classe Cube (sticker)
        └── RubiksCube.js   # Classe RubiksCube (logique)
```

## 🎯 Objectifs du projet

1. ✅ Maîtriser la visualisation 2D du Rubik's Cube 2x2
2. ✅ Implémenter la logique de rotation des faces
3. ⏳ Développer un solveur optimal basé sur IDA*
4. ⏳ Créer une visualisation 3D interactive
5. ⏳ Adapter le système au Rubik's Cube 4x2

## 📝 Notes de développement

- **Approche progressive** : 2x2 (✅ visualisation, ⏳ résolution) → 4x2
- **Design Pattern** : Programmation orientée objet avec classes ES6
- **Architecture** : Séparation logique métier / présentation
- **Performance** : Optimisation future avec IDA*
- **Évolutivité** : Code modulaire facilitant les extensions

## 🔧 Installation et utilisation

1. Cloner le repository
```bash
git clone https://github.com/Redone7777/KubeStar4.2.git
cd KubeStar4.2/RubiksCube2x2
```

2. Ouvrir `index.html` dans un navigateur moderne
   - Nécessite un serveur local pour les modules ES6
   - Recommandé : Live Server (VS Code) ou Python HTTP Server

3. Interagir avec le cube
   - **Mélanger** : génère 20 mouvements aléatoires
   - **Réinitialiser** : retour à l'état résolu
   - **Résoudre** : algorithme à venir

---

**Projet KubeStar 4.2** - Phase 1 terminée (Visualisation 2D + Logique de base)
