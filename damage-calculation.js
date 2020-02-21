function attack (damage) {
    // Code disini
    var attack = damage - 2
    return attack
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
    // Code disini
    var damageResult = 0
    for (i = 1; i <= numberOfAttacks; i++) {
        var totalDamage = attack(damagePerAttack)
        damageResult += totalDamage

    }
    return damageResult
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90
