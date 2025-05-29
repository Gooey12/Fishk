const variable = {
    Money: 0,
    Level: 0,
    XP: 0,
    FishInInventory: 0,
    FishPrice: Math.round(Math.random() * (9 - 6) + 6),
    fishResetTimeout: null,
    sellResetTimeout: null,
    canFish: true
};

export default variable;