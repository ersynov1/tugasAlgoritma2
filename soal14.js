const prompt = require('prompt-sync')({sigint:true})
let n = Number(prompt('Nilai : '))
if (n > 100 )
    console.log('Nilai kamu sempurna!')
else
    console.log('Nilai kamu pas')