function attack(damage) {
  return damage - 2; // damage reduced by 2
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
  // init var
  var reducedDamage = attack(damagePerAttack); // var to contain damage after being processed by attack function
  var nettDamage = numberOfAttacks * reducedDamage; // find nett damagae
  return nettDamage;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90
