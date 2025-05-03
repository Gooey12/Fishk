let Money = 0
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
        document.getElementById("fishBTN").innerText = "Fish";
    }, 1250);

    document.getElementById("fishBTN").innerHTML = "Reeling..."




    const fishedText = document.getElementById("fishedDisplay");

    const min = 0
    const max = 3
    const fished = Math.round(Math.random() * (max - min) + min);
    FishInInventory = FishInInventory + fished

    if (fished > 0) {
        fishedText.innerHTML = `You fished ${fished} fishes! 🐟`
    } else if (fished == 0) {
        fishedText.innerHTML = "You didn't got any fish :("
    }

    clearTimeout(fishResetTimeout);
    fishResetTimeout = setTimeout(() => {
        fishedText.innerHTML = "You haven't fished anything";
    }, 2200);
}

// Sell some fish
function sellFish() {
    const soldView = document.getElementById("soldDisplay");

    if (FishInInventory > 0) {
        let Earned = FishInInventory * FishPrice
        Money += Earned
        soldView.innerHTML = `You got $${Earned} from selling ${FishInInventory} fishes`
        FishInInventory = 0
        Earned = 0

        clearTimeout(sellResetTimeout);
        sellResetTimeout = setTimeout(() => {
            soldView.innerHTML = "You haven't sold anything";
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