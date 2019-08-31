function attack (damage) {
    // Code disini
    return damage - 2
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    // Code disini
    return attack(damagePerAttack) * numberOfAttacks;
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90
    // function attack (damage) {
    //   // Code disini
    //   return damage
    // }
    
    // function damageCalculation (numberOfAttacks, damagePerAttack) {
    //   // Code disini
    //   var damage = 0
    //   while (numberOfAttacks > 0){
    //   damage += (damagePerAttack-2)
    //   numberOfAttacks --
    //   }
    //   return damage
    // }
    
    // // TEST CASE
    // console.log(damageCalculation(9, 25)); // 207
    
    // console.log(damageCalculation(10, 4)); // 20
    
    // console.log(damageCalculation(5, 20)); // 90
  
    