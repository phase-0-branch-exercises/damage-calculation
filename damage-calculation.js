function attack (damage) {
  return damage-2;
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  var totalDmg = 0;

  for(var i = 0; i < numberOfAttacks; i++) totalDmg += attack(damagePerAttack);

  return totalDmg;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90