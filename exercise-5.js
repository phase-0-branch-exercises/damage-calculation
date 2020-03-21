function attack(damage) {
    // Code disini
    return damageMinus = 2*damage
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
     // Code disini
    var damageMinus = attack(numberOfAttacks);
    var hasil = numberOfAttacks*damagePerAttack - damageMinus

    return hasil;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90