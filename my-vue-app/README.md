# Mon Projet Fullstack avec Express et Vue.js

## Description
Ce projet est une application web fullstack utilisant Express pour le backend et Vue.js pour le frontend. Prisma est utilisé pour la gestion de la base de données.

## Prérequis
Avant de commencer, assurez-vous d'avoir les logiciels suivants installés sur votre machine :
- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- [npm](https://www.npmjs.com/) (version 6 ou supérieure)
- [Prisma](https://www.prisma.io/docs/getting-started/quickstart)

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/votre-projet.git
   cd votre-projet

2. Installez les dépendances pour le backend et le frontend :
    # Pour le backend
    cd my_express_app
    npm install

    # Pour le frontend
    cd ../my-vue-app
    npm install

## Lancer le Projet
### Backend

1. Configurer Prisma :
    cd my_express_app 
    npx prisma migrate dev
    npx prisma db seed

2. Lancer le backend : 
    cd my_express_app
    nodemon app.js

### Frontend

1. Lancer le frontend : 
    cd ../my-vue-app
    npm run serve

----------------

# Bravo vous pouvez maintenant accéder à l'application sur http://localhost:8080

<span style="color:red">Cliquer sur les cartes pokemon pour voir threejs</span>.

