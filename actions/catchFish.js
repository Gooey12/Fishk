import variable from '../vars.js';
import stats from '../stats.js';

function catchFish() {
    if (!variable.canFish) return;

    variable.canFish = false;
    setTimeout(() => {
        variable.canFish = true;
        document.getElementById("fishBTN").innerText = "Fish 🎣";
    }, 1250);

    document.getElementById("fishBTN").innerHTML = "Reeling...";

    const fishedDisplay = document.getElementById("fishedDisplay");

    const min = 0;
    const max = 3;
    const fished = Math.round(Math.random() * (max - min) + min);
    variable.FishInInventory += fished;

    stats.totalFished += fished;

    if (fished > 0) {
        if (fished < 2) {
            fishedDisplay.innerHTML = `You caught ${fished} fish! 🐟`;
        } else {
            fishedDisplay.innerHTML = `You caught ${fished} fishes! 🐟`;
        }
    } else {
        fishedDisplay.innerHTML = "You didn't catch any fish :(";
    }

    clearTimeout(variable.fishResetTimeout);
    variable.fishResetTimeout = setTimeout(() => {
        fishedDisplay.innerHTML = "You haven't fished anything";
    }, 2200);
}

export default catchFish;