const prompt = require ('prompt-sync')({sigint:true})
let h = prompt('Input huruf a-z : ')
if(h >= 'a' && h <= 'z'){
    if (h == 'a' || h == 'i' || h == 'u' || h == 'e' || h == 'o')
    console.log(`${h} termasuk huruf vokal`)
    else
    console.log(`${h} termasuk huruf konsonan`)
}else{
    console.log(`${h} bukan huruf`)}