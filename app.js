import axios from 'axios';

async function loadStatus  () {
  const characterContainer = document.getElementById('characters');
  
try {
   const response = await axios.get('https://dragonball-api.com/api/characters');
   console.log(response.data);

   const characters = response.data.items;
   characterContainer.innerHTML = '';

   characters.forEach(character => {
    const card = document.createElement('div');
    card.classList.add('character-card');

    card.innerHTML = `
    <img src="${character.image}" alt="${character.name}">
      <h2>${character.name}</h2>
      <p>Race: ${character.race || 'Unknown'}</p>
      <p>Power Level: ${character.powerLevel || 'Unknown'}</p>
    `;
    
    characterContainer.appendChild(card);
   });

 } catch (error) {
   console.error('Request failed:', error.message);

    characterContainer.textContent = 'Failed to load characters. Please try again later.';
 }
}

 loadStatus();
