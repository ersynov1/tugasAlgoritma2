const prompt = require('prompt-sync')({sigint:true})
let harga = Number(prompt('Harga makanan : '))
const fee = harga * 5 / 100
const pajak = harga * 10 / 100
console.log(`
Pajak         : ${pajak}
Fee           : ${fee}
Harga Bayar   : ${harga + pajak + fee} `)