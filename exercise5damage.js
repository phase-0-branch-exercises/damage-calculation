function attack (damage) {
    var hasil = damage -2
    return hasil
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    var hasil = 0;
    for( i=0 ; i<numberOfAttacks ; i++){
        if( i<damagePerAttack ){
            hasil += attack(damagePerAttack);
        }
    }
    return hasil;
  } 
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90