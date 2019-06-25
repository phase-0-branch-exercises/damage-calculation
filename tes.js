// rekursif === loop

/*
  dari segi waktu rekursif vs loop:
  lebih cepat looping dibanding rekursif

  alasannya: rekursif dia menggunakan memory

  kenapa harus belajar rekursif:
  - setiap programmer harus bisa menggunakan baik
  looping maupun rekursif
  - [functional programming]
  - kalau misal kalian bisa buat looping, maka
  akan bisa dibuat rekursif
  - rekursif digunakan untuk mengelegankan koding
  - lebih dekat dengan algoritma dan pseudocode
*/

// 1 + 2 + 3 + 4 + 5

function sum(number) {
  var result = 0;
  for(var i = 1; i <= number; i++) {
    result += i;
  };
  return result;
};

// console.log(sum(5));

function sumRec(number, i = 1) {
  // base case => dimana fungsi rekursif kalian akan berhenti
  // CASE 1
  // if(number === 1) {
  //   return 1;
  // } else {
  //   return number + sumRec(number - 1);
  // };
  // CASE 2
  // if(i === number) {
  //   return number;
  // } else {
  //   return i + sumRec(number, i + 1);
  // };
};

// console.log(sumRec(5)); // 15

function alfaRec(string, kamus = 'ABCDEFGHIJKLMNOPQRSTUVXYZ') {
  if(kamus[0] === string) {
    return string;
  } else {
    var initialWord = kamus[0];
    kamus = kamus.slice(1);
    return initialWord + alfaRec(string, kamus);
  };
};

// console.log(alfaRec('C')); // 'ABC'

function incrementRec(number, i = 1) {
  if (i === number) {
    return number;
  } else {
    return i + '+' + incrementRec(number, i + 1) + '+' + i;
  };
};

function newSum(number) {
  console.log(number);
  if(number === 1) {
    return 1;
  } else {
    return number + newSum(number - 1);
  };
};

// F(3)
// 3 + F(2)
// 3 + 2 + F(1)
// 3 + 2 + 1
// 6

// F([3, 5, 6, 7])
// 3 + F([5, 6, 7])
// 3 + 5 + F([6, 7])
// 3 + 5 + F([7])
// 3 + 5 + 7 + F([])

// console.log(newSum(3));

function checkPrime(number) {
  for (var i = 2; i < number; i++) {
    if(number % i === 0) {
      return false;
    };
  };
  return true;
};

function sumArrayPrimeNumbers(array) {
  console.log(array);
  if(array.length === 0) {
    return 0;
  } else {
    if(checkPrime(array[0]) === true) {
      return array[0] + sumArrayPrimeNumbers(array.slice(1));
    } else {
      return sumArrayPrimeNumbers(array.slice(1));
    };
  };
};

console.log(sumArrayPrimeNumbers([3, 4, 5, 6, 7])) // 3 + 5 + 7  = 15