/**
 * FUNC ATTACK()
 * func damageCalculation() -> numberOfAttack & damagePerAttack
 * damage-2 setiap attack
 */

function attack (damage) {
    // Code disini
    var d = damage - 2

    return d
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    // Code disini
    var jml = 0
    var kali =[]
    var damage = attack(damagePerAttack)
    for(i = 1; i<= numberOfAttacks; i++){
        kali.push(i*damage)
    }
    for(j = 0; j<kali.length; j++){
        jml += kali[i]}

    return kali[kali.length-1]
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90