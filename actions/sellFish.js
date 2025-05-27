import variable from '../vars.js';

function sellFish() {
    const soldDisplay = document.getElementById("soldDisplay");

    if (variable.FishInInventory > 0) {
        let earned = variable.FishInInventory * variable.FishPrice;
        variable.Money += earned;

        variable.XP += variable.FishInInventory / Math.round(Math.random() * (3 - 2) + 2);
        console.log(`XP: ${variable.XP}`);

        soldDisplay.innerHTML = `You got $${earned} from selling ${variable.FishInInventory} fishes`;

        variable.FishInInventory = 0;
        earned = 0;

        if (variable.XP >= 10) {
            variable.Level += 1;
            variable.XP = 0;

            console.log(`Level: ${variable.Level}`);
            console.log(`XP: ${variable.XP}`);
        }

        clearTimeout(variable.sellResetTimeout);
        variable.sellResetTimeout = setTimeout(() => {
            soldDisplay.innerHTML = "You haven't sold anything";
        }, 1500);
    } else {
        soldDisplay.innerHTML = "You don't have anything to sell";

        clearTimeout(variable.sellResetTimeout);
        variable.sellResetTimeout = setTimeout(() => {
            soldDisplay.innerHTML = "You haven't sold anything";
        }, 1500);
    }
}

export default sellFish;