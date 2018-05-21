//[Exercises 5] Damage Calculation

//Logic Challenge: Damage Calculation

function attack (damage) {
  // Code disini
  return -2
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  // Code disini
  return numberOfAttacks * (damagePerAttack + attack())
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90