import variable from './vars.js';

import catchFish from './actions/catchFish.js'
import sellFish from './actions/sellFish.js';



// Catch fish
document.getElementById("fishBTN").addEventListener('click', catchFish);


// Sell fish
document.getElementById("sellBTN").addEventListener('click', sellFish);



// Update display texts
setInterval(() => {
    document.getElementById("moneyDisplay").innerHTML = `Money: $${variable.Money} 💵`;
}, 100);

setInterval(() => {
    document.getElementById("fishDisplay").innerHTML = `Inventory: ${variable.FishInInventory} 🐟`;
}, 100);

setInterval(() => {
    document.getElementById("levelDisplay").innerHTML = `Level: ${variable.Level}`;
}, 100);