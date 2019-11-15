function attack (damage) {
  return damage - 2
}
// console.log(attack(8));
function damageCalculation (numberOfAttacks, damagePerAttack) {
  var totalDamage = attack (damagePerAttack)
  return totalDamage*numberOfAttacks
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90

