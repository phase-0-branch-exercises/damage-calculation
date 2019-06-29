/*
=================================
Recursive Mastery : Data Reducer
=================================
Nama:________
[INSTRUKSI]
Diberikan sebuah function dataReducer yang menerima satu parameter berupa string.
Function akan memproses string dengan mengecek secara alphabet urutan yang dimulai dari karakter pertama.
Apabila ditemukan karakter yang bukan merupakan alphabet setelahnya, karakter tersebut di skip.
Function akan mereturn karakter apa saja yang di-skip, dalam bentuk string dibatasi dengan koma.
[CONTOH]
input: abcdxefgh5wi menjadi abcdefghi,
proses: kita meng-skip x karena setelah d harusnya e, dan 5 dan w karena setelah h harusnya i.
output: 'x,5,w'
input: opqrstu menjadi opqrstu,
proses: tidak ada yang terskip
output: ''
input: acdefghij => a
proses: kita meng-skip c,d,e,f,g,h,i,j karena setelah a seharusnya b
output: c,d,e,f,g,h,i,j
*/

function dataReducer(data) {
  // return '5'.charCodeAt();
};

console.log(dataReducer('abcdxefgh5wi')); // 'x,5,w'
console.log(dataReducer('opqrstu')); // ''
console.log(dataReducer('acdefghij')); // 'c,d,e,f,g,h,i,j'
console.log(dataReducer('testu')); // 'e,s,t'