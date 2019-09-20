function attack(damage){
  if(damage > 2){

      return damage - 2; 
  }else{
      return 0;
  }
}

function damageCalculation(numberOfAttack, damagePerAttack){
    var realDamage = attack(damagePerAttack);
    return numberOfAttack * realDamage;
}

console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90