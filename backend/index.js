const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json()); // Pour valider les champs reçus (JSON)

// Route 1 : GET /api/health
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Le serveur répond correctement' });
});

// Route 2 : GET /api/items (Liste de démonstration)
app.get('/api/items', (req, res) => {
    const demoItems = [
        { id: 1, nom: 'Élément A' },
        { id: 2, nom: 'Élément B' }
    ];
    res.status(200).json(demoItems);
});

// Route 3 : POST /api/items (Validation et création fictive pour l'instant)
app.post('/api/items', (req, res) => {
    const { nom } = req.body;

    // Validation
    if (!nom) {
        return res.status(400).json({ erreur: 'Le champ "nom" est requis' });
    }

    // Réponse de succès
    res.status(201).json({ message: 'Élément créé avec succès', data: { nom } });
});

// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});