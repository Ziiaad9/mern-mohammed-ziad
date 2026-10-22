const form = document.getElementById('item-form');
const input = document.getElementById('nom');
const list = document.getElementById('item-list');

// Ajouter un élément visuellement dans la liste (sans appel au backend)
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche la page de se recharger
    const nom = input.value;

    if (nom) {
        const li = document.createElement('li');
        li.textContent = nom;
        list.appendChild(li);

        input.value = ''; // Vider le champ de texte
    }
});