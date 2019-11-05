function attack(damage) {
  //Code Here

  return (damage -= 2);
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
  // Code Here
  var res = numberOfAttacks * attack(damagePerAttack);
  return res;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90
