function attack (damage) {
    var hasil = 0;
    hasil = damage - 2;
    return hasil;
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
    var damage = attack(damagePerAttack);
    var hasil = 0;

    hasil = numberOfAttacks * damage;

    return hasil;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90