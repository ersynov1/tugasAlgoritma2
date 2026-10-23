const prompt = require('prompt-sync')({sigint:true})
let jr = Number(prompt('Nilai jari-jari : '))
console.log(`
Volume         : ${4/3 * 3.14 * jr^3}
Luas Permukaan : ${4 * 3.14 * jr^2}
`)