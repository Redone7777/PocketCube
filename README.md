# KubeStar 4.2

Un solveur 3D basé sur IDA* pour le Rubik's Cube 4x2 avec interface web moderne.

## 📋 Description

KubeStar 4.2 est un projet de visualisation et de résolution du Rubik's Cube 4x2. Le développement commence par un Rubik's Cube 2x2 pour comprendre les principes de base, avant de passer au cube 4x2 complet.

## Interface Web (2x2 - Apprentissage)

### Ce qui a été réalisé :

- ✨ **Interface moderne avec effet Glassmorphism**
  - Palette de couleurs (#222831, #393E46, #00ADB5, #EEEEEE)
  - Boutons interactifs avec icônes (Mélanger, Résoudre)

- 🎨 **Structure responsive**
  - Layout Flexbox avec zone 3D et panneau de contrôles
  - Animations et effets de survol

### Technologies utilisées :
- HTML5
- CSS3 (Variables CSS, Flexbox, Animations)
- Google Fonts (Poppins)
- Font Awesome 6.5.1

## 🚀 Prochaines étapes

#### Visualisation 3D du Cube (2x2 puis 4x2)
- Intégration Three.js
- Modélisation et animation des rotations

#### Logique du Cube
- Structure de données
- Gestion des mouvements et états

#### Algorithme IDA*
- Implémentation de l'algorithme de recherche
- Fonction heuristique optimisée

#### Intégration et Animation
- Animation pas à pas de la résolution
- Contrôles de lecture et statistiques

#### Passage au Cube 4x2
- Adaptation de l'interface pour le 4x2
- Algorithmes optimisés pour la taille supérieure

## 📂 Structure du projet

```
KubeStar4.2/
├── README.md
└── RubiksCube2x2/
    ├── index.html      # Interface principale
    ├── style.css       # Styles et animations
    └── script.js       # Logique JavaScript (à venir)
```

## 🎯 Objectifs du projet

1. Maîtriser la résolution du 2x2 (apprentissage)
2. Créer une visualisation 3D interactive du Rubik's Cube 4x2
3. Implémenter un solveur optimal basé sur IDA*
4. Offrir une expérience utilisateur fluide et intuitive

## 📝 Notes de développement

- **Approche progressive** : 2x2 → 4x2
- **Design Pattern** : Séparation logique métier / présentation
- **Performance** : Optimisation de l'algorithme IDA*
- **Évolutivité** : Code modulaire pour faciliter les extensions

---

**Projet KubeStar 4.2** - Développement en cours
