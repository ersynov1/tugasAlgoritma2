const prompt = require('prompt-sync')({sigint:true})
let x = Number(prompt('Nilai x : '))
let y = Number(prompt('Nilai y : '))
let z = Number(prompt('Nilai z : '))
if (x > y && x > z){
    if(y > z)
    console.log(`Nilai terbesar adalah x yaitu ${x}
Nilai terkecil adalah z yaitu ${z}`)
      else
    console.log(`NIlai terbesar adalah x yaitu ${x}
Nilai terkecil adalah y yaitu ${y}`)
}else if (y > x && y > z){
    if(z > x)
    console.log(`Nilai terbesar adalah y yaitu ${y}
Nilai terkecil adalah x yaitu ${x} `)
    else 
        console.log(`Nilai terbesar adalah y yaitu ${y}
Nilai terkecil adalah z yaitu ${z} `)
}else{
    if (y > x)
    console.log(`Nilai terbesar adalah z yaitu ${z}
NIlai terkecil adalah x yaitu ${x}`)
    else
    console.log(`Nilai terbesar adalah y yaitu ${z}
Nilai terkecil adalah x yaitu ${y} `)}