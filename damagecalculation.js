function attack (damage) {
   damage = 2

  return damage
}

//console.log(attack())

function damageCalculation (numberOfAttacks, damagePerAttack) {
  var b = attack()
  var total = damagePerAttack - b

  var pukulan = total * numberOfAttacks

  return pukulan

}


console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90
