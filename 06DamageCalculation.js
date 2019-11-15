function attack (damage) {
  // Code disini
  const pengurang = 2;
  return damage-pengurang;
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  // Code disini
  return numberOfAttacks*attack(damagePerAttack);
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90