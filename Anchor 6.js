function attack (damage) 
{
    var decreasingDamage = -2
    if (damage === 1)
      {
          return decreasingDamage
      }
    else
      {
          return decreasingDamage + attack(damage-1)
      }


}
  






function damageCalculation (numberOfAttacks, damagePerAttack) 
{   
    console.log('\n', '\n', '-------------------------------------');
    return (numberOfAttacks * damagePerAttack) + attack(numberOfAttacks)

}
  
  
  
  
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90