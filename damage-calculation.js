function attack (damage) {
    let damageReduction = damage -2;
    return damageReduction; 
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
    let atk = attack(damagePerAttack) * numberOfAttacks
    return atk;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90