function attack (damage) {
    return damage -= 2
     // Code disini
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    //   var DPS = '';
    //   var totalSerangan = ''

    //   for (var i=0; i <= damagePerAttack; i++) {
    //       if(damagePerAttack === i) {
    //           DPS += (damagePerAttack -= 2)
    //       }
    //   }

    //   for (var j=0; j <= numberOfAttacks; j++) {
    //       if(numberOfAttacks === j) {
    //           totalSerangan += j
    //       }
    //   }
        var damageKurang2 = attack(damagePerAttack)
      return damageKurang2 * numberOfAttacks
    // Code disini
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90