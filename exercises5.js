function attack(damage) {
    var attack = damage - 2
    return attack
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
    var numOfAttack = attack(damagePerAttack)
    var damage = numOfAttack * numberOfAttacks
    return damage
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90