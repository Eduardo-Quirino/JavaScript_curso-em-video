var agora = new Date()//Variavel mostrar horas conforme sistema.
var hora = agora.getHours() //Hora local do sistema
console.log(`Agora são exatamente ${hora} horas.`)

//Condição dizer Bom dia, Boa tarde e Boa noite.
if (hora < 12) {
    console.log(`Bom dia!`)
}else if(hora <= 18){
    console.log(`Boa Tarde!`)
}else{
    console.log(`Boa noite!`)
}