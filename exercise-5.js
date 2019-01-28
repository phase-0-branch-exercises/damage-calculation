function attack (damage) {
  // Code disini
  var dmg = damage - 2
  return dmg
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  // Code disini
  var result = 0
  result = numberOfAttacks * attack(damagePerAttack)
  return result
}

// TEST CASE
console.log(damageCalculation(9, 25)) // 207

console.log(damageCalculation(10, 4)) // 20

console.log(damageCalculation(5, 20)) // 90
