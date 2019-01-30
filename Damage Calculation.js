function attack(damage) {
  // Code disini
  var attack = damage - 2
  
  return attack
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
  // Code disini
  var result = numberOfAttacks * attack(damagePerAttack)

  return result

}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90