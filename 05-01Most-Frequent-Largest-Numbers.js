function sorting(arrNumber) {
  for (let i = 0; i < arrNumber.length; i++) {
    for (let j = i + 1; j < arrNumber.length; j++) {
      if (arrNumber[i] < arrNumber[j]) {
        let temp = arrNumber[i];
        arrNumber[i] = arrNumber[j];
        arrNumber[j] = temp;
      }
    }
  }

  return arrNumber;
}

function getTotal(arrNumber) {
  let jumlah = 1;
  for (let i = 1; i < arrNumber.length; i++) {
    if (arrNumber[0] == arrNumber[i]) {
      jumlah += 1;
    }
  }
  return arrNumber.length == 0 ? '' : `angka paling besar adalah ${arrNumber[0]} dan jumlah kemunculan sebanyak ${jumlah} kali`;
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''