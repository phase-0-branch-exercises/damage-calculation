// Damage Calculation

function attack (damage) {
  var res = damage - 2;
  return res;
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  var nettAttack = attack (damagePerAttack);
  return numberOfAttacks * nettAttack;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90