import variables from './variables.js';

import catchFish from './actions/catchFish.js'
import sellFish from './actions/sellFish.js';



// Catch fish
document.getElementById("fishBTN").addEventListener('click', catchFish);


// Sell fish
document.getElementById("sellBTN").addEventListener('click', sellFish);



// Update display texts
setInterval(() => {
    document.getElementById("moneyDisplay").innerHTML = `Money: $${variables.Money} 💵`;
}, 100);

setInterval(() => {
    document.getElementById("fishDisplay").innerHTML = `Inventory: ${variables.FishInInventory} 🐟`;
}, 100);

setInterval(() => {
    document.getElementById("levelDisplay").innerHTML = `Level: ${variables.Level}`;
}, 100);