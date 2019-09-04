function attack (damage) {
    return damage - 2
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
    var totalDamage = 0
    for (var i = numberOfAttacks; i > 0; i--) {
        totalDamage += attack(damagePerAttack)
    }
    return totalDamage
    
    // if (damagePerAttack <= 0) { => this one just for fun, I changed the rule so each attack permanently lower the damagePerAttack by 2
    //     return 0
    // }
    // var totalDamage = attack(damagePerAttack)
    // numberOfAttacks--
    // if (numberOfAttacks > 0) {
    //     totalDamage += damageCalculation(numberOfAttacks, damagePerAttack - 2)
    // }
    // return totalDamage
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90