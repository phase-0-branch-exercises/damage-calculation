function attack (damage) {
  var jumlahDamage = damage - 2;
  return jumlahDamage;
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  var damageSetiapAttack = attack(damagePerAttack);
  var finalDamage = numberOfAttacks * damageSetiapAttack;
  return finalDamage;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207
console.log(damageCalculation(10, 4)); // 20
console.log(damageCalculation(5, 20)); // 90
