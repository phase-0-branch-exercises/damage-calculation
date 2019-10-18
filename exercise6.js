//Logic Challenge: Damage Calculation

function damageCalculation (numberOfAttacks, damagePerAttack) {
  function attack(damage) {
    return damage - 2;
  }
  return numberOfAttacks * attack(damagePerAttack);
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207
console.log(damageCalculation(10, 4)); // 20
console.log(damageCalculation(5, 20)); // 90