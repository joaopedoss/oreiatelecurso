const fs = require('fs')

fs.readFile('arquivo.txt', 'ufa8', (erro, dados) => {
    if(erro) {
        console.log(erro)
    }
    console.log(dados)
})