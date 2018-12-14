function attack (damage) {
    // Code disini
    var serang = damage - 2
    return serang
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
    // // Code disini
    var skill = attack(damagePerAttack)
    var result = numberOfAttacks*skill
    return result
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90