const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function contarA (string){
    return string.toLowerCase().split('a').length-1
}

rl.question('Insira uma palavra: \n', (palavra) => {
    const contagem = contarA(palavra)
    console.log(`A letra 'A' aparece ${contagem} vezes.`)
    rl.close()
})