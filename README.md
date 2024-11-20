
# **CarteAchat**

Bienvenue à **CarteAchat**, une application web construite avec **Vue.js** (frontend) et **Express.js** (backend).

---

## 🚀 **Prérequis**

Avant de commencer, assurez-vous d'avoir les éléments suivants installés :

- [Node.js](https://nodejs.org/) (v14 ou supérieur recommandé)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

---

## 📁 **Structure du Projet**

```
Projet_js/
├── my_express_app/       # Application Express.js
├── my-vue-app/      # Application Vue.js
└── README.md      # Documentation
```

---

## 🔧 **Installation**

Clonez le dépôt et installez les dépendances pour les deux parties du projet.

```bash
# Clonez le dépôt
git clone https://github.com/Kotaorie/Projet_js_M1.git

# Installation des dépendances backend
cd my_express_app
npm install

# Installation des dépendances frontend
cd ../my-vue-app
npm install
```

---

## ▶️ **Lancer le Projet**

Démarrez le serveur backend et le serveur frontend.

### **1. Lancer le backend**
Depuis le répertoire `my_express_app` :
```bash
node app.js
```
Cela démarre le serveur Express.js sur `http://localhost:3000` (par défaut).

### **2. Lancer le frontend**
Depuis le répertoire `my-vue-app` :
```bash
npm run serve
```
Cela démarre l'application Vue.js sur `http://localhost:8080` (par défaut).

---

## ⚙️ **Scripts Disponibles**

### **Backend**
- `npm run start`: Lance le serveur Express en mode production.
- `npm run dev`: Lance le serveur avec **nodemon** pour le rechargement automatique.
- `npm run test`: Lance les tests (si configuré).

### **Frontend**
- `npm run serve`: Lance le serveur de développement Vue.js.
- `npm run build`: Compile l'application pour la production.
- `npm run lint`: Vérifie le code avec ESLint.

---

## 🛠 **Technologies Utilisées**

### **Frontend**
- [Vue.js](https://vuejs.org/): Framework JavaScript pour le frontend.
- [Vue Router](https://router.vuejs.org/): Gestion des routes.
- [Vuex](https://vuex.vuejs.org/): Gestion de l'état global (optionnel).

### **Backend**
- [Express.js](https://expressjs.com/): Framework minimaliste pour Node.js.

---

## 🗂 **API Endpoints**

### Exemple de structure d'API :
| Méthode  | Route            | Description             |
|----------|------------------|-------------------------|
| `GET`    | `/api/resource`  | Récupérer des données.  |
| `POST`   | `/api/resource`  | Ajouter des données.    |
| `PUT`    | `/api/resource/:id` | Mettre à jour une ressource. |
| `DELETE` | `/api/resource/:id` | Supprimer une ressource. |

---

🎉 **Merci d'utiliser ce projet ! N'hésitez pas à partager vos retours ou à poser des questions.**