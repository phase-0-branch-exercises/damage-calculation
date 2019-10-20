const attack = (damage) => {
    return damage - 2
  }
  
  const damageCalculation = (numberOfAttacks, damagePerAttack) => {
    totalAttack = 0;
    const newDamage = attack(damagePerAttack);
    for (let i = 0; i < numberOfAttacks; i++) {
      totalAttack += newDamage
    }
    return totalAttack;
  }      
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  console.log(damageCalculation(10, 4)); // 20
  console.log(damageCalculation(5, 20)); // 90