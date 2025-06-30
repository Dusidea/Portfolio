## Prérequis

- Un dépôt GitHub où pousser le code.
- l'application React + Vite fonctionnelle en local.
- Node.js et npm installés.
- +++ Branch dédiée ou configuration pour GitHub Pages (généralement gh-pages ou main/master).

## Ce qu'il faut savoir

npm run dev lance un serveur de développement local, ce n’est pas pour la prod.

Pour déployer, il faut construire une version statique de l'app avec npm run build.

GitHub Pages sert uniquement des fichiers statiques (HTML/CSS/JS), donc il faut construire l'app avant et déployer les fichiers générés dans dist.

## Étapes concrètes pour déployer React Vite sur GitHub Pages

/!\ Attention à bien se connecter avec le compte github
approprié (dans le doute, utiliser gitbash et lancer la commande pour appeler la clé ssh )

```
$ ssh-add /D/.ssh/gmail.epub
```

### Résumé rapide

1. Configurer base dans vite.config.js.
2. Installer gh-pages.
3. Ajouter scripts build, predeploy, deploy.
4. npm run deploy pour builder + pousser.
5. Configurer GitHub Pages sur GitHub.

Ton site est en ligne, accessible sans npm run dev.

### Configurer le fichier vite.config.js

Il faut indiquer à Vite le chemin de base (base path) de l'app sur GitHub Pages.
dans vite.config.js, ajoute/modifie la config :

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/<repo-name>/', // Remplacer <repo-name> par le nom du repo GitHub
  plugins: [react()]
})
```

Si tu déploies sur un domaine personnalisé ou directement sur <username>.github.io, alors base: '/' suffit.

### Installer le package gh-pages

Ce package va permettre de pousser automatiquement le contenu de dist dans la branche gh-pages (branche spéciale utilisée par GitHub Pages).

```
npm install --save-dev gh-pages
```

### Ajouter des scripts dans package.json

```
"scripts": {
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

- npm run build construit les fichiers statiques dans dist.
- npm run predeploy sera lancé automatiquement avant deploy pour builder.
- npm run deploy va envoyer le contenu de dist dans la branche gh-pages.

### Lancer la commande de déploiement

```
npm run deploy
```

Ça va :

- Construire l'app,
- Pousser le dossier dist dans la branche gh-pages sur GitHub.

### Configurer GitHub Pages

- Sur GitHub, va dans Settings > Pages.
- Choisis la source de publication :
- Branche : gh-pages
- Dossier : racine (/)

GitHub va alors servir ton site depuis cette branche.

## attention aux chemins des fichiers

Sur GitHub Pages, ton site est servi sous une URL avec un sous-dossier (ex : https://username.github.io/Portfolio/).

### Configurer le basename dans React Router

```
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename="/Portfolio/">
      {/* tes Routes ici */}
    </BrowserRouter>
  )
}

export default App
```

### Rendre les autres fichiers (images, data) accessibles depuis le dossier Public

Idem avec tous les chemins de fichiers (autres que code). Ici cela concerne :

- project.json dans fetch de projects.jsx : j'ai remplacé

```
fetch('/projects.json')

```

par

```
fetch(import.meta.env.BASE_URL + 'projects.json')
```

Les images appelée (par exemple les preview dans project.json et le logo de vs code dans skills.jsx) doivent :

1. etre dispo dans public/assets
2. être appelées via un chemin relatif avec variable d'environnement

```
<img src={import.meta.env.BASE_URL + project.image} alt={project.title} />
```

### Explications

- import.meta.env.BASE_URL :
  Cette variable contient la racine publique de ton site (ex: /Portfolio/ en prod, / en dev).
  Ça garantit que tes URL fonctionnent partout.

- Dans le JSON, on met un chemin relatif aux images (assets/image1.png) sans la partie base.

- Dans React, on concatène la base et ce chemin pour construire l’URL complète accessible depuis le navigateur.
