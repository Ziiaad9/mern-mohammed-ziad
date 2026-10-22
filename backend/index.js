const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Connexion à MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connecté à MongoDB Atlas avec succès'))
    .catch((err) => console.error('Erreur de connexion MongoDB:', err));

// Schéma et Modèle Mongoose pour les éléments
const itemSchema = new mongoose.Schema({
    nom: { type: String, required: true }
});
const Item = mongoose.model('Item', itemSchema);

// Route 1 : GET /api/health
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Le serveur répond correctement' });
});

// Route 2 : GET /api/items (Lire en base)
app.get('/api/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ erreur: 'Erreur lors de la récupération des éléments' });
    }
});

// Route 3 : POST /api/items (Créer en base)
app.post('/api/items', async (req, res) => {
    const { nom } = req.body;

    if (!nom) {
        return res.status(400).json({ erreur: 'Le champ "nom" est requis' });
    }

    try {
        const newItem = new Item({ nom });
        await newItem.save();
        res.status(201).json({ message: 'Élément créé avec succès', data: newItem });
    } catch (error) {
        res.status(500).json({ erreur: 'Erreur lors de la création de l\'élément' });
    }
});

// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});