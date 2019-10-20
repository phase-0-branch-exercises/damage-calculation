function attack(damage) {
  // Code disini
  return damage - 2;
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
  // Code disini
  // METHOD 1
  //   return numberOfAttacks * attack(damagePerAttack);

  // METHOD 2 LOOP ATTACT
  var damage = 0;
  for (let i = 0; i < numberOfAttacks; i++) {
    damage += attack(damagePerAttack);
  }
  return damage;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90
