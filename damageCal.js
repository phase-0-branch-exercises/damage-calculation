function attack (damage) {
    // Code disini
    //console.log(damage)
    if(damage < 2){
      return 0
    }else{
      return damage-2
    }
    


  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    // Code disini
    var serang = attack(damagePerAttack)
    var kalkulasi = serang*numberOfAttacks
    return kalkulasi
    
    
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90