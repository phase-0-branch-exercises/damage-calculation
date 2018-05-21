function attack (damage) {
  // Code disini
  var damageBaru = damage-2;
  return damageBaru;
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  // Code disini
  var hitung = attack(damagePerAttack)* numberOfAttacks
  return hitung
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90
