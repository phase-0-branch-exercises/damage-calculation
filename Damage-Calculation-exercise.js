function attack (damage) {
    return damage -2;
  }
  
function damageCalculation (numberOfAttacks, damagePerAttack) {
    //var calc = 0;
    if (numberOfAttacks == 1 ){
      return attack(damagePerAttack);
    } else if (numberOfAttacks < 1) {
      return "Jumlah serangan harus lebih besar daripada 0";
    } else if (damagePerAttack < 2) {
      return "Nilai serangan harus lebih besar daripada 2"
    } else {
      return attack(damagePerAttack) + damageCalculation(numberOfAttacks -1, damagePerAttack);
    }
}
  
// TEST CASE
console.log(damageCalculation(9, 25)); // 207
  
console.log(damageCalculation(10, 4)); // 20
  
console.log(damageCalculation(5, 20)); // 90

console.log(damageCalculation(0, 20)); // 1

console.log(damageCalculation(5, 2)); // 0

console.log(damageCalculation(2, 1)); // 90