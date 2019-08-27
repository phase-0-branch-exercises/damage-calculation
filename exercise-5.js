function attack (damage) {
    return damage - 2
}
  
function damageCalculation (numberOfAttacks, damagePerAttack) {

   
    var temp = attack(damagePerAttack)

    return numberOfAttacks * temp
}
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90
  
  