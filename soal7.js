let a = 8.3
let c = '3.2'
console.log(`
${a} + ${c} = ${a + Number(c)}
${a} - ${c} = ${(a - Number(c)).toFixed(1)}
${a} * ${c} = ${(a * Number(c)).toFixed(2)}
${a} / ${c} = ${a / Number(c)}
${a} % ${c} = ${Math.ceil(a % Number(c))}
`)