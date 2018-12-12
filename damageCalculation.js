function attack(damage) {
    var totalDamagePerAttack = damage - 2
    return totalDamagePerAttack
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
    var damageAttack = attack(damagePerAttack)
    var counter = 0
    for (var i = 0; i < numberOfAttacks; i++) {
        counter += damageAttack

    }
    return counter
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90