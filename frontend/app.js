// Configuration centralisée de l'URL du backend
const API_URL = 'http://localhost:3000/api';

const form = document.getElementById('item-form');
const input = document.getElementById('nom');
const list = document.getElementById('item-list');
const errorMsg = document.getElementById('error-message');

// Fonction pour récupérer et afficher les éléments
async function fetchItems() {
    try {
        const response = await fetch(`${API_URL}/items`);
        if (!response.ok) throw new Error('Erreur réseau');

        const data = await response.json();
        list.innerHTML = ''; // Vider la liste

        data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.nom;
            list.appendChild(li);
        });
    } catch (error) {
        errorMsg.textContent = 'Erreur lors du chargement des données.';
    }
}

// Fonction pour ajouter un nouvel élément
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nom = input.value;

    try {
        const response = await fetch(`${API_URL}/items`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nom })
        });

        if (!response.ok) throw new Error('Erreur lors de l\'ajout');

        input.value = ''; // Vider le champ
        errorMsg.textContent = ''; // Effacer les erreurs
        fetchItems(); // Recharger la liste
    } catch (error) {
        errorMsg.textContent = 'Erreur lors de l\'ajout de l\'élément.';
    }
});

// Charger les éléments au démarrage de la page
fetchItems();