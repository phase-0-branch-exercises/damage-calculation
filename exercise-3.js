function attack (damage) {
  dam = damage - 2
  return dam
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  var damage = attack(damagePerAttack)
  var calc = numberOfAttacks*damage
  return calc
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90