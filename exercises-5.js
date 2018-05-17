function attack (damage) {
 var temp = damage - 2;
 return temp;
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
    var numberDamage = attack(damagePerAttack);
    return numberOfAttacks * numberDamage;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90