function attack (damage) {
    
    return damage -2;
    // Code disini
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
   
   var receiveDemage =  attack(damagePerAttack)
   var totDemage = receiveDemage * numberOfAttacks
   
   return totDemage
   
   // Code disini
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90