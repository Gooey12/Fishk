import variables from '../vars.js';

function catchFish() {
    if (!variables.canFish) return;

    variables.canFish = false;
    setTimeout(() => {
        variables.canFish = true;
        document.getElementById("fishBTN").innerText = "Fish 🎣";
    }, 1250);

    document.getElementById("fishBTN").innerHTML = "Reeling...";

    const fishedDisplay = document.getElementById("fishedDisplay");

    const min = 0;
    const max = 3;
    const fished = Math.round(Math.random() * (max - min) + min);
    variables.FishInInventory += fished;

    if (fished > 0) {
        fishedDisplay.innerHTML = `You fished ${fished} fishes! 🐟`;
    } else {
        fishedDisplay.innerHTML = "You didn't get any fish :(";
    }

    clearTimeout(variables.fishResetTimeout);
    variables.fishResetTimeout = setTimeout(() => {
        fishedDisplay.innerHTML = "You haven't fished anything";
    }, 2200);
}

export default catchFish;