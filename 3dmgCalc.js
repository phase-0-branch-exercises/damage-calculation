function attack (damage) {
    // Code disini
    return damage - 2
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
// Code disini
var total = 0
for(var i = 0; i<numberOfAttacks; i++){
    total += attack(damagePerAttack)
}
return total
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90