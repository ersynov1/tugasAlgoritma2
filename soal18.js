const prompt = require('prompt-sync')({sigint:true})
let n = Number(prompt('Input Nilai : '))
if (n % 7 == 0)
    console.log('Angka ini merupakan kelipatan 7')
else
   console.log('Anda belum beruntung')