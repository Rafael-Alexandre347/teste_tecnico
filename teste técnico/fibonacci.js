const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function isfibonacci(num){
    if (num===0 || num===1) return true


let  a = 0, b = 1, c

while (b < num){
    temp = a + b
    a = b
    b = c
}

return b === num

}

rl.question('Insira um número: \n', (input) =>{
const n = parseInt(input)
    
if (isNaN(n)) {
    console.log('Por favor, insira um número válido.')
} else {
    if (isfibonacci(n)){
        console.log(`${n} pertence à sequência Fibonacci`)
    } else {
        console.log(`${n} não pertence à sequência Fibonacci`)
    }
}
rl.close()
})