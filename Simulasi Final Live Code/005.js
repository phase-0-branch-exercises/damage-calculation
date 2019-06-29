/*
=========
HACKATHON
=========

[INSTRUCTION]
Buatlah suatu aplikasi untuk membuat catatan ekonomi.

[EXAMPLE]
"bank account sudah disediakan"

input: [['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'], ['Larry Page+2%', 'Larry Page-1%']]
process:
  bank account => deposit atas nama Jeff Bezos ditambah 5%, menjadi 105000
  bank account => deposit atas nama Larry Page ditambah 10%, mejadi  104500
  bank account => deposit atas nama Jeff Bezos dikurangi 3%, mejadi 101850
  ...dst
output:
  [
    { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 104500, owner: 'Google' },
    { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 106590, owner: 'Google' },
    { name: 'Larry Page', deposit: 105524.1, owner: 'Google' }
  ]

[RULES]
- Dilarang menggunakan .indexOf(), .split(), .filter(), .map(), dan .slice()
*/

function economyChangeSummary(tradeActivity) {
  var bankAccount = [
    { name: 'Jeff Bezos', deposit: 100000, owner: 'Amazon' },
    { name: 'Jack Ma', deposit: 90000, owner: 'Alibaba' },
    { name: 'Larry Page', deposit: 95000, owner: 'Google' }
  ];

  let result = [];
  let daftar = [];
  
  for (let i = 0; i < tradeActivity.length; i++) {
    for (let j = 0; j < tradeActivity[i].length; j++) {
      daftar.push(tradeActivity[i][j]);
    }
  }
  
  for (let i = 0; i < daftar.length; i++) {
    let nama = '';
    let temp = {};
    let persenDepo = 0;
    let depoStart = 0;
    let depoNow = 0;
    let operator = '';
    let owner = '';

    for (let j = 0; j < daftar[i].length; j++) {
      if (daftar[i][j] == '+' || daftar[i][j] == '-') {
        if (daftar[i][j] == '+') {
          operator = '+'
        } else if (daftar[i][j] == '-') {
          operator = '-'
        }
        temp.name = nama;
        let tempPersenDepo = '';
        for (let k = j + 1; k < daftar[i].length; k++) {
          if (daftar[i][k] == '%') {
            persenDepo = parseInt(tempPersenDepo);
            break;
          } else {
            tempPersenDepo += daftar[i][k];
          }
        }
        break;
      } else {
        nama += daftar[i][j];
      }
    }

    for (let j = 0; j < bankAccount.length; j++) {
      if (bankAccount[j].name === temp.name) {
        depoStart = bankAccount[j].deposit;
        owner = bankAccount[j].owner;
      }
    }

    let ada = false;
    let idxAda = 0;
    for (let j = result.length - 1; j >= 0; j--) {
      if (result[j].name === nama) {
        ada = true;
        idxAda = j;
        break;
      }
    }

    if (!ada) {
      if (operator === '+') {
        depoNow = depoStart + (persenDepo / 100 * depoStart);
      } else if (operator === '-') {
        depoNow = depoStart - (persenDepo / 100 * depoStart);
      }
    } else {
      if (operator === '+') {
        depoNow = result[idxAda].deposit + (persenDepo / 100 * result[idxAda].deposit);
      } else if (operator === '-') {
        depoNow = result[idxAda].deposit - (persenDepo / 100 * result[idxAda].deposit);
      }
    }

    temp.deposit = depoNow;
    temp.owner = owner;
    result.push(temp);
  }


  return result;
};

console.log(economyChangeSummary([['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'], ['Larry Page+2%', 'Larry Page-1%'], ['Jack Ma+4%'], ['Larry Page-8%', 'Jack Ma+20%', 'Jeff Bezos-3%', 'Jeff Bezos+8%']]));
/* 
  [ { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
  { name: 'Larry Page', deposit: 104500, owner: 'Google' },
  { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
  { name: 'Larry Page', deposit: 106590, owner: 'Google' },
  { name: 'Larry Page', deposit: 105524.1, owner: 'Google' },
  { name: 'Jack Ma', deposit: 93600, owner: 'Alibaba' },
  { name: 'Larry Page', deposit: 97082.172, owner: 'Google' },
  { name: 'Jack Ma', deposit: 112320, owner: 'Alibaba' },
  { name: 'Jeff Bezos', deposit: 98794.5, owner: 'Amazon' },
  { name: 'Jeff Bezos', deposit: 106698.06, owner: 'Amazon' } ]
*/

console.log(economyChangeSummary([['Jeff Bezos-10%']]))
/*
  // [ { name: 'Jeff Bezos', deposit: 90000, owner: 'Amazon' } ]
*/