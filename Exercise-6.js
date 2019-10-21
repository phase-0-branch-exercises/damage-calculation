// FRANS JESKY - BATCH 37
// HACKTIV8 PHASE 0 - WEEK 5
// EXERCISE 6 - DAMAGE CALCULATION

function attack (damage) {
    return damage - 2;
  }
  
function damageCalculation (numberOfAttacks, damagePerAttack) {
    return attack(damagePerAttack) * numberOfAttacks;
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90