function attack (damage) {
    // Code disini
    damage -= 2
    return damage
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    // Code disini
    var thedamage = 0
    for(var i = 0; i < numberOfAttacks; i++){
        thedamage += attack(damagePerAttack);
    }
    return thedamage
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90