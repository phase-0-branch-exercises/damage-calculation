function attack (damage) {
    // Code disini
    damage = damage - 2;
    return damage;
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
    // Code disini
    if (numberOfAttacks == 0){
        return 0;
    } else {
        let damage = damagePerAttack + damageCalculation(numberOfAttacks-1, damagePerAttack)
        return damageDealt = attack(damage);
    }
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90