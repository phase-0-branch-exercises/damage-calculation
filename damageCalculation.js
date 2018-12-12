function attack(damage) {
    // Code disini - proses pengurangan attack - 2
    finalDamage = damage - 2
    return finalDamage
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
    // Code disini
    totalDamage = numberOfAttacks * attack(damagePerAttack)
    return totalDamage
}


// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90