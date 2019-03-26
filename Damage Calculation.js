function attack(damage) {
  var damage = -2
  return damage
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
  if (numberOfAttacks == null || damagePerAttack == null) {
    return 0
  }

  var rumusAttack = numberOfAttacks * attack()
  a = (numberOfAttacks * damagePerAttack) + rumusAttack

  return a
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90

console.log(damageCalculation(0, 0));