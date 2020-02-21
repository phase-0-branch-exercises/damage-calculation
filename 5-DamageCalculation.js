function attack(damage) {
  var damage = damage - 2;
  return damage;
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
  var result = 0;
  var damage = attack(damagePerAttack);

  result = damage * numberOfAttacks;
  return result;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90
