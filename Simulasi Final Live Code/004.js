/**
======================
 SISA BELANJA LEBARAN
======================

[INSTRUCTION]
Menjelang lebaran emak-emak ramai belanja ke pasar, 
seorang emak ingin berbelanja ke pasar dengan uang yang seadanya hasil dari THR suaminya,
dan emak bingung untuk memilih mana yang harus jadi prioritas agar sesuai kebutuhan lebaran.

Buatlah function yang akan menghitung nominal dan jumlah pecahan pengembalian belanja.
function tersebut akan menerima 2 parameter parameter pertama adalah nilai pembayaran, 
parameter kedua adalah nilai yang harus dibayarkan. 

Buatlah code se-dinamis mungkin untuk menghandle apabila ketersediaan uang nominal dan jumlahnya
diubah-ubah dan asumsi uang kembaliannya selalu cukup dengan jumlah ketersediaan uang
 

*/

function sisaBelanjaLebaran(bayar, harga){
  let sisa = bayar - harga;
  let kembalian = {};
  kembalian['1000'] = 0;
  kembalian['2000'] = 0;
  kembalian['5000'] = 0;
  kembalian['10000'] = 0;
  kembalian['20000'] = 0;
  kembalian['50000'] = 0;
  kembalian['100000'] = 0;
  let result = {};

  if (sisa < 0) {
    return 'Uang tidak cukup mak, minta lagi sama suami';
  } else if (sisa == 0) {
    return {};
  } else {
    for (let i = 0; i < sisa; i++) {
      if (sisa >= 100000) {
        kembalian['100000'] += 1;
        sisa -= 100000;
        continue;
      }
      
      if (sisa >= 50000) {
        kembalian['50000'] += 1;
        sisa -= 50000;
        continue;
      }

      if (sisa >= 20000) {
        kembalian['20000'] += 1;
        sisa -= 20000;
        continue;
      }

      if (sisa >= 10000) {
        kembalian['10000'] += 1;
        sisa -= 10000;
        continue;
      }

      if (sisa >= 5000) {
        kembalian['5000'] += 1;
        sisa -= 5000;
        continue;
      }

      if (sisa >= 2000) {
        kembalian['2000'] += 1;
        sisa -= 2000;
        continue;
      }

      if (sisa >= 1000) {
        kembalian['1000'] += 1;
        sisa -= 1000;
        continue;
      }
    }
  }

  for (let key in kembalian) {
    if (kembalian[key] > 0) {
      result[key] = kembalian[key];
    }
  }

  return result;
};

// Belanja Bahan Pokok 
console.log(sisaBelanjaLebaran(1000000, 755000));
/*
output
  { 
    '5000': 1, 
    '20000': 2, 
    '100000': 2 
  }
*/

// Belanja Kue Lebaran
console.log(sisaBelanjaLebaran(40000, 35000));
/*
output
  { '5000': 1 }
*/

// Belanja Baju Baru
console.log(sisaBelanjaLebaran(50000,50000)); // {}

// Belanja Opor Ayam
console.log(sisaBelanjaLebaran(50000,500000)); // Uang tidak cukup mak, minta lagi sama suami