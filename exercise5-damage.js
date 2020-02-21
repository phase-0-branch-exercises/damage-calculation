function attack (damage) {
  // Code disini
  var hitung = damage - 2

  return hitung
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  // Code disini
  var hitung = attack(damagePerAttack)
  var result = hitung * numberOfAttacks
  return result
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90