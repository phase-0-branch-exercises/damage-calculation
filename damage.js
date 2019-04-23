function attack(damage) {
    // Code disini
    var totalDamage = damage - 2
    return totalDamage
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
    // Code disini
    var finalDamage = attack(damagePerAttack)
    return numberOfAttacks * finalDamage
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90