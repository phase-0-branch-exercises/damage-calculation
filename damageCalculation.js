function attack(damage) {
    return damage - 2
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
    var totalDamage = 0
    var i = numberOfAttacks
    while (i > 0) {
        totalDamage += attack(damagePerAttack)
        i--
    }
    return totalDamage
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90