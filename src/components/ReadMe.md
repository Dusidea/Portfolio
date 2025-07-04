# 🎯 Portfolio LPlanes

A web app built with React and Vite, using the Material UI (MUI) library and custom reusable components. Deployed via GitHub Pages

---

## 🚀 Demo

🔗https://dusidea.github.io/Portfolio/

---

## 🛠️ Stack

- ⚛️ [React](https://reactjs.org/)
- ⚡ [Vite](https://vitejs.dev/)
- 🎨 [Material UI (MUI)](https://mui.com/)
- 🧩 Modular reusable components
- 🗂️ Deployed via GitHub Pages

---

## 📦 Installation

### Required

- Node.js ≥ 18
- npm ≥ 9

### Locally run the project

```

git clone https://github.com/Dusidea/Portfolio.git
cd ton-repo
npm install
npm run dev
```

🧱 Project Structure

```

src/
├── components/ # Reusable components
├── pages/ # Main pages
├── styles/
 ├── theme/ # MUI custom theme
├── App.jsx # Composant principal
└── main.jsx # Point d'entrée Vite
```

Data and images are
in Root > public > assets : images
in Root > public > data : projects.json provides the data used for the ProjectsList component

🎨 MUI custom theme
MUI theme is defined in src/theme/theme.js :

- custom palette
- typography
- components override

See more in MUI_tips.md

🌐 Deployment

V1. The app is deployed on Github Pages
See Deployment_notes.md

⚙️ Available scripts

```

npm run dev # run the dev server
npm run build # production build
npm run preview # build preview
npm run deploy # deployment on GitHub Pages

```

📚 Future improvements
⚙️ Adding pages to take advantage of the routing system

    🌍 Globalization (i18n)

Adding an english version triggered by a language switch

Database:
Currenlty the project list used in ProjectList component is fetched in a Json file manually edited.
I'd like to build a DataBase of projects
Use API calls to fetch data and build the json file
