function sortRec(arr) {
  if (arr.length <= 1) {
    // console.log('kosong');
    return arr;
  }

  let setengah = parseInt(arr.length / 2);
  let kiri = sortRec(arr.slice(0, setengah));
  // console.log('kiri var = ' + kiri);
  let kanan = sortRec(arr.slice(setengah, arr.length));
  // console.log('kanan var = ' + kanan);

  function merge (kiri, kanan) {
    let arry = [];

    while (kiri.length > 0 && kanan.length > 0) {
      arry.push((kiri[0] <= kanan[0]) ? kiri.shift() : kanan.shift());
    }

    // console.log('1');
    // console.log( 'kanan = ' + kanan + ' kiri = ' + kiri + ' arry = ' + arry);
    return arry.concat(kiri).concat(kanan);
  };

  return merge(kiri, kanan);
  // return `return kiri var = ${kiri} kanan var = ${kanan}`
}


// console.log(sortRec([3,2,5,6,9,8,1]));
// console.log([3,2,5,6,9,8,1].shift());
// kiri 3 2 5  //  3 2 
// kanan 6 9 8 1
// arry = 3 2 5 6 9 8 1
// function merge (kiri, kanan) {
//   let arry = [];

//   while (kiri.length > 0 && kanan.length > 0) {
//     arry.push((kiri[0] <= kanan[0]) ? kiri.shift() : kanan.shift());
//   }

//   console.log( 'kanan = ' + kanan + ' kiri = ' + kiri + ' arry = ' + arry);
//   return arry.concat(kiri).concat(kanan);
// };


function urutAngka(num) {
  let result = [];
  if (num === 1) {
    // return 1;
    result.push(1);
  } else {
    // return urutAngka(num - 1) + ' ' + num;
    result.push(urutAngka(num - 1), num);
  }

  return result;
}

// console.log(urutAngka(5));

function fib(n) {

  if (n < 2) {
    return n; // base cases
  } else {
    return fib(n-1) + fib(n-2);
  }

}

// console.log(fib(7));

// 1 1 2 3 5 8 13 21

function plusSatu(num, i = 1) {
  if (num === i) {
    return num;
  } else {
    // return num1 + ' ' + num2;
    // return plusSatu(num - 1) + ' ' + num + ' ' + plusSatu(num - 1);
    return i + ' ' + plusSatu(num, i + 1) + ' ' + i;
  }
}

// [[[[] 2 []] 3 [[] 2 []]] 4 [[[] 2 []] 3 [[] 2 []]]] 5 [[[[] 2 []] 3 [[] 2 []]] 4 [[[] 2 []] 3 [[] 2 []]]]
// 2  3  2  4  2  3  2  5  2  3  2  4  2  3  2
// 1 2 3 4
// -4 -3 -2 -1 0 1 2 3 4

// console.log(plusSatu(5)); // 1 2 3 4 5 4 3 2 1

// 1+2+3+4+5+4+3+2+1
// 3+2+1+2+3

let arr = 'abcd';
console.log(arr.slice(1));