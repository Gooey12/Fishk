import variables from '../variables.js';

function sellFish() {
    const soldDisplay = document.getElementById("soldDisplay");

    if (variables.FishInInventory > 0) {
        let earned = variables.FishInInventory * variables.FishPrice;
        variables.Money += earned;

        variables.XP += variables.FishInInventory / Math.round(Math.random() * (3 - 2) + 2);
        console.log(`XP: ${variables.XP}`);

        soldDisplay.innerHTML = `You got $${earned} from selling ${variables.FishInInventory} fishes`;

        variables.FishInInventory = 0;
        earned = 0;

        if (variables.XP >= 10) {
            variables.Level += 1;
            variables.XP = 0;

            console.log(`Level: ${variables.Level}`);
            console.log(`XP: ${variables.XP}`);
        }

        clearTimeout(variables.sellResetTimeout);
        variables.sellResetTimeout = setTimeout(() => {
            soldDisplay.innerHTML = "You haven't sold anything";
        }, 1500);
    } else {
        soldDisplay.innerHTML = "You don't have anything to sell";

        clearTimeout(variables.sellResetTimeout);
        variables.sellResetTimeout = setTimeout(() => {
            soldDisplay.innerHTML = "You haven't sold anything";
        }, 1500);
    }
}

export default sellFish;