function attack(damage) {
  var reduce = 0;

  reduce = damage * -2;

  return reduce;
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
  var result = 0;

  var lives = damagePerAttack * numberOfAttacks;

  result = lives + attack(numberOfAttacks);

  return result;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90
