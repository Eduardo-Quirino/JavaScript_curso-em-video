var idade = 66 //Variavel de obrigatoriedade de votação.
console.log(`você tem ${idade} anos.`)

//condição
if (idade < 16) {
    console.log(`Não vota`)
} else if (idade < 18 || idade > 65){
    console.log(`Voto opcional`)
}else {
    console.log(`Voto obrigatório`)
}
