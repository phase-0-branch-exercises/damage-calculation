// Diberikan function attack(), damageCalculation().

// Function damageCalculation()akan menerima 2 parameter yaitu numberOfAttacks dan damagePerAttack
// Function attack()akan menerima 1 parameter yaitu damage
// [IMPLEMENTASI] Gunakan function damageCalculation()untuk menghitung damage yang diterima dan gunakan function attack()untuk mensimulasikan setiap attack dengan rumus damage - 2disetiap attack.

// [CONTOH] damageCalculation(3, 10)akan mengembalikan nilai 24

// Karena attack akan dikurangi 2, maka setiap attack akan menghasilkan damage 8

function attack (damage) {
  // Code disini
  return damage -= 2
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  // Code disini
  var realDamage = attack(damagePerAttack)
  var totalDamage = numberOfAttacks * realDamage

  return totalDamage
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90