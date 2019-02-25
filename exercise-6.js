//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-5_Exercise-6
//----------------------------------------------------------
function attack(damage) {
    // Code disini
    return damage - 2;
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
    // Code disini
    return numberOfAttacks * attack(damagePerAttack);
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90