const prompt = require('prompt-sync')({sigint:true})
let cd = Number(prompt('Masukkan Kode : '))
if (cd == 78821)
    console.log('You are authenticated')
else
    console.log('You have no access')