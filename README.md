# 🍬 Carambar Blagues Frontend 

Interface web moderne pour les blagues Carambar & co - Projet entretien technique CDA

## 🚀 Liens

- **Application déployée** : https://tuirz.github.io/carambar-blagues-frontend/
- **API Backend** : https://carambar-blagues-api-u6ws.onrender.com
- **Documentation API** : https://carambar-blagues-api-u6ws.onrender.com/api-docs
- **Repository Backend** : [carambar-blagues-api](https://github.com/tuirz/carambar-blagues-api)

## ✨ Fonctionnalités

- 🎯 **Interface intuitive** - Design moderne aux couleurs Carambar
- 🎭 **Révélation interactive** - Effet de floutage sur les réponses (hover)
- 📱 **Responsive** - Optimisé pour tous les écrans
- ⚡️ **Performance** - Build optimisé (204K)
- 🔄 **États dynamiques** - Gestion du chargement et des erreurs
- 🎨 **Animations fluides** - Transitions CSS soignées

## 🛠️ Technologies

- **Bibliothèque** : React 19
- **Build Tool** : Vite
- **Styling** : Tailwind CSS v3
- **Déploiement** : GitHub Pages
- **Linting** : ESLint
- **Bundler** : Vite + PostCSS

## 🏃‍♂️ Installation locale

```bash
# Cloner le projet
git clone https://github.com/tuirz/carambar-blagues-frontend.git
cd carambar-blagues-frontend

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## 📦 Scripts disponibles

```bash
# Développement
npm run dev          # Serveur de développement avec hot-reload

# Build
npm run build        # Build de production
npm run preview      # Prévisualisation du build

# Qualité
npm run lint         # Vérification du code avec ESLint

# Déploiement
npm run deploy       # Déploiement sur GitHub Pages
```

## 🎨 Aperçu des fonctionnalités

### Interface principale
- Header avec branding Carambar
- Zone d'affichage des blagues avec états conditionnels
- Bouton d'action avec animations
- Footer avec lien vers l'API

### Interaction utilisateur
1. **Chargement initial** - Message d'invitation
2. **Clic sur le bouton** - Animation de chargement
3. **Affichage de la blague** - Question visible, réponse floutée
4. **Survol de la réponse** - Révélation progressive avec animation
5. **Gestion d'erreur** - Message d'erreur stylisé

## 🏗️ Architecture

```
src/
├── App.jsx          # Composant principal
├── main.jsx         # Point d'entrée React
└── index.css        # Styles Tailwind CSS

Configuration/
├── vite.config.js        # Configuration Vite
├── tailwind.config.js    # Configuration Tailwind
├── postcss.config.js     # Configuration PostCSS
└── eslint.config.js      # Configuration ESLint
```

## 🎯 Intégration API

L'application consomme l'API backend avec :
- **Endpoint** : `/api/v1/blagues/random`
- **Méthode** : GET
- **États** : Loading, Success, Error

## 📱 Responsive Design

- **Mobile** : Design optimisé pour petits écrans
- **Tablet** : Adaptation fluide
- **Desktop** : Expérience complète avec hover effects

## 🚀 Déploiement

Le projet est automatiquement déployé sur GitHub Pages via GitHub Actions :
1. Push sur la branche `main`
2. Build automatique
3. Déploiement sur `gh-pages`

## 👨‍💻 Auteur

Luigi SOUFAR - Candidat Concepteur Développeur d'Applications
