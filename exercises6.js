function attack (damage) {
    // console.log(damage)
    var hasil = damage - 2
    return hasil
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    // console.log(numberOfAttacks)
    // var damage = attack(damagePerAttack)
    // console.log(attack(damage)) 
    // console.log(attack(damagePerAttack))
    var result = numberOfAttacks * attack(damagePerAttack)
    return result
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90