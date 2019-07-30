/* Phase 0 Week 5 Exercise 6 */
/* Damage Calculation */

function attack (damage) {
    return damage-2;
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
    // return numberOfAttacks * attack(damagePerAttack);
    // Cek apakah ada attack yang masuk
    if (numberOfAttacks > 0) {
        // Tambah damage yang telah dihitung dan gunakan fungsi rekursif dengan jumlah attack yang sudah dikurangi 1
        return attack(damagePerAttack) + damageCalculation(numberOfAttacks-1, damagePerAttack);
    }
    // Jika tidak ada attack yang masuk maka damage nol
    else {
        return 0;
    }
}


console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90