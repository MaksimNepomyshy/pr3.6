import Pokemon from './pokemon.js';
import { attack } from './battle.js';
import { pokemons } from './pokemons.js';

const $control = document.querySelector('.control');

// Знаходимо Pikachu в масиві pokemons
const pikachuData = pokemons.find(pokemon => pokemon.name === 'Pikachu');
const charmanderData = pokemons.find(pokemon => pokemon.name === 'Charmander');

// Створюємо об'єкти гравців з класу Pokemon
const player1 = new Pokemon('player1', 'Pikachu', 'health-player1', 'progressbar-player1', pikachuData.attacks);
const player2 = new Pokemon(1, 'Charmander', 'health-player2', 'progressbar-player2', charmanderData.attacks);

const init = () => {
  console.log('Start Game!');

  // Заповнюємо дані про покемонів
  document.getElementById('sprite-player1').src = pikachuData.img;
  document.getElementById('name-player1').innerText = player1.name;

  document.getElementById('sprite-player2').src = charmanderData.img;
  document.getElementById('name-player2').innerText = player2.name;

  player1.renderHP();
  player2.renderHP();

  // Додаємо кнопки атак на основі даних з attacks
  player1.attacks.forEach(attackData => {
    const button = document.createElement('button');
    button.className = 'button';
    button.innerText = attackData.name;

    // Лічильник атак
    const attackCounter = createCounter(attackData.maxCount, button);

    button.addEventListener('click', () => {
      if (attackCounter()) {
        attack(player1, player2, attackData.name);

        // Контратака супротивника
        setTimeout(() => {
            const randomAttackIndex = Math.floor(Math.random() * player2.attacks.length);
            const randomAttack = player2.attacks[randomAttackIndex];

            if (player2.damageHP > 0) { // Перевірка, чи супротивник ще живий
                attack(player2, player1, randomAttack.name);
            }
        }, 1000); 
      }
    });

    $control.appendChild(button);
  });
};

// Функція лічильника
function createCounter(maxClicks, button) {
    let count = 0;
    const clicksLeftSpan = document.createElement("span"); 
    clicksLeftSpan.textContent = ` (${maxClicks} left)`; 
    button.appendChild(clicksLeftSpan); 

    return function() {
        if (count < maxClicks) {
            count++;
            clicksLeftSpan.textContent = ` (${maxClicks - count} left)`;

            if (count === maxClicks) {
                button.disabled = true;
            }
            return true;
        }
        return false;
    };
}

init();