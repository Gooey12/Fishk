let Money = 0
let Level = 0
let XP = 0

let FishInInventory = 0
let FishPrice = 7

let fishResetTimeout;
let sellResetTimeout;

let canFish = true;



// Catch a fish
function fish() {
    if (!canFish) return;

    canFish = false;
    setTimeout(() => {
        canFish = true;
        document.getElementById("fishBTN").innerText = "Fish 🎣";
    }, 1250);

    document.getElementById("fishBTN").innerHTML = "Reeling..."




    const fishedDisplay = document.getElementById("fishedDisplay");

    const min = 0
    const max = 3
    const fished = Math.round(Math.random() * (max - min) + min);
    FishInInventory = FishInInventory + fished

    if (fished > 0) {
        fishedDisplay.innerHTML = `You fished ${fished} fishes! 🐟`
    } else if (fished == 0) {
        fishedDisplay.innerHTML = "You didn't got any fish :("
    }

    clearTimeout(fishResetTimeout);
    fishResetTimeout = setTimeout(() => {
        fishedDisplay.innerHTML = "You haven't fished anything";
    }, 2200);
}



// Sell some fish
function sellFish() {
    const soldDisplay = document.getElementById("soldDisplay");

    if (FishInInventory > 0) {
        let Earned = FishInInventory * FishPrice
        Money += Earned

        XP += FishInInventory / Math.round(Math.random() * (3 - 2) + 2);
        console.log(`XP: ${XP}`);

        soldDisplay.innerHTML = `You got $${Earned} from selling ${FishInInventory} fishes`

        FishInInventory = 0
        Earned = 0

        if (XP >= 10) {
            Level += 1
            XP = 0
        
            console.log(`Level: ${Level}`);
            console.log(`XP: ${XP}`);
        }

        clearTimeout(sellResetTimeout);
        sellResetTimeout = setTimeout(() => {
            soldDisplay.innerHTML = "You haven't sold anything";
        }, 1500);
    } else {
        soldDisplay.innerHTML = "You don't have anything to sell"

        clearTimeout(sellResetTimeout);
        sellResetTimeout = setTimeout(() => {
            soldDisplay.innerHTML = "You haven't sold anything";
        }, 1500);
    }
}



// Update display text
setInterval(function() {
    document.getElementById("moneyDisplay").innerHTML = `Money: $${Money} 💵`
}, 1);

setInterval(function() {
    document.getElementById("fishDisplay").innerHTML = `Inventory: ${FishInInventory} 🐟`
}, 1);

setInterval(function() {
    document.getElementById("levelDisplay").innerHTML = `Level: ${Level}`
}, 1);