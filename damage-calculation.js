function attack (damage) {
  return damage.totalDamage - (damage.numberOfAttacks * 2)
}
function damageCalculation (numberOfAttacks, damagePerAttack) {
  let totalDamage = numberOfAttacks * damagePerAttack
  return attack({
    totalDamage: totalDamage,
    numberOfAttacks: numberOfAttacks
  })
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207
console.log(damageCalculation(10, 4)); // 20
console.log(damageCalculation(5, 20)); // 90