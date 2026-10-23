const prompt = require ('prompt-sync')({sigint:true})
let h = Number(prompt('Input Harga Barang : '))
if (h >= 200000)
console.log(`
Anda mendapat diskon sebesar : 7.5 %
Total Belanjaan anda menjadi : ${h * 7.5 / 100}
`)
else
    console.log(`
Anda tidak mendapat diskon
Total belanjaan anda tetap ${h}`)