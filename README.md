# Application MERN - Examen Pratique

## Objectif
Créer et déployer une petite application Full Stack MERN fonctionnelle, versionnée et configurée avec des variables d'environnement.

## Prérequis
- Node.js
- Git
- Un compte MongoDB Atlas

## Installation et lancement local
1. Cloner le dépôt.
2. Naviguer dans le dossier `backend` et installer les dépendances : `npm install`
3. Créer un fichier `.env` basé sur `.env.example` et ajouter l'URI MongoDB.
4. Lancer le serveur backend : `npm run mohammed` (démarre sur le port 3000).
5. Ouvrir le fichier `frontend/index.html` avec Live Server pour voir l'interface.

## Variables d'environnement requises (Backend)
- `PORT` : Port d'écoute du serveur (par défaut 3000).
- `MONGODB_URI` : Lien de connexion à la base de données MongoDB.

## Routes API
- `GET /api/health` : Vérifie l'état du serveur.
- `GET /api/items` : Récupère la liste des éléments.
- `POST /api/items` : Ajoute un nouvel élément.
## Liens de déploiement
- **Frontend :** [https://mern-mohammed-ziad-frontend.vercel.app](https://mern-mohammed-ziad-frontend.vercel.app)
- **Backend Principal :** [https://mern-mohammed-ziad.vercel.app](https://mern-mohammed-ziad.vercel.app)
- **Backend de Secours (Cloudflare) :** [https://mern-mohammed-ziad.pages.dev](https://mern-mohammed-ziad.pages.dev)