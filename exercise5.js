function attack(damage) {
    // Code disini
    // var realDamage = damage-2
    return damage-2
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
    // Code disini
    // var attackDamage = attack(damagePerAttack) 
    var totalDamage = numberOfAttacks * attack(damagePerAttack)
    return totalDamage
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90
