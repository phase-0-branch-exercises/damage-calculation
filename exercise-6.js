function attack (damage) {
    // Code disini
    return damage-2;
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    // Code disini
    newAtk = attack(damagePerAttack)
    if (numberOfAttacks === 0 || newAtk === 0) {
        return 0;
    } else if (numberOfAttacks === 1) {
        return newAtk; 
    } else {
        return damageCalculation(numberOfAttacks-1, damagePerAttack) + newAtk;
    }
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90