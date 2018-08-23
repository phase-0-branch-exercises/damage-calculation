/*
 * [Exercises 5] Damage Calculation
 * johanesi
 * https://github.com/hacktiv8/phase-0-activities/blob/master/modules/challenge-damage-calculation.md
*/

function attack (damage) {
    var calculateDamage = damage - 2;
    return calculateDamage; 
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
    var totalDamage = attack(damagePerAttack) * numberOfAttacks;
    return totalDamage;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90