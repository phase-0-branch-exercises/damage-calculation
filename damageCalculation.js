function attack (damage) {
  // Code disini
  var damagecalc = damage - 2
  
  return damagecalc
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  // Code disini
  var totaldamage = attack(damagePerAttack)
  var result = numberOfAttacks * totaldamage

  return result
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90