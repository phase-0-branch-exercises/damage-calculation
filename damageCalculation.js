function attack(damage) {
    return damage - 2;
}

/* function damageCalculation(numberOfAttacks, damagePerAttack) {
    return numberOfAttacks * attack(damagePerAttack);
}
 */
//Recursive damageCalculation to assume multi-hit attack
function damageCalculation(numberOfAttacks, damagePerAttack) {
    // console.log(`Player hits enemy with ${attack(damagePerAttack)} attack damage`);
    return numberOfAttacks === 1 ? attack(damagePerAttack) : attack(damagePerAttack) + damageCalculation(numberOfAttacks - 1, damagePerAttack)
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90