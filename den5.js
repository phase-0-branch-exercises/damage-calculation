function attack (damage) {
  // Code disini
  var minus = damage - 2
  return minus
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  // Code disini
  var harm = attack(damagePerAttack)
   var hasil = numberOfAttacks * harm
  return hasil;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90