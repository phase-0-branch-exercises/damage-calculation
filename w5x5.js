function attack(damage) {
    // Code disini
    //attack(25)
    return damage - 2;
    //23
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
    // Code disini
    return numberOfAttacks * attack(damagePerAttack);
    // 9 * 23
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207
console.log(damageCalculation(10, 4)); // 20
console.log(damageCalculation(5, 20)); // 90