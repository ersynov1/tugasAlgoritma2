const prompt = require('prompt-sync')({sigint:true})
let l = Number(prompt('Lebar Persegi Panjang   : '))
let p = Number(prompt('Panjang Persegi Panjang : '))
console.log(`
Luas     = ${p * l}
Keliling = ${2*(p + l)}
`)