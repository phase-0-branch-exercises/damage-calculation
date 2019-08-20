function sorting(arrNumber){
    var arrSortir = arrNumber.sort(function(a,b){
        return b-a
    })
    return arrSortir
}
function getTotal(arrNumber){
    var arr = sorting(arrNumber)
    if(arr.length<=0){
        return ''
    }
    var angkaTerbesar = arr[0]
    var count = 0
    for(var i=0;i<arr.length;i++){
        if(angkaTerbesar ===arr[i]){
            count++
        }
    }
    return 'angka paling besar adalah '+angkaTerbesar+' dan jumlah kemunculan sebanyak '+count+' kali'   
}
function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
console.log(mostFrequentLargestNumbers([]));