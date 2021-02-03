function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique seus dados e tente novamente!')
    } else {
        var fsex = document.getElementsByTagName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')

        img.setAttribute('id', 'foto')

        //tirar as aspas colocado por conta temp aula ex3 modulo 14:40
        if ('fsex[0].checked') {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //imagem criança
                img.setAttribute('src', 'img/crianças/menino 250x250.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovens/jovem menino 250x250.png')

            } else if (idade < 50) {
                //imagem adulto
                img.setAttribute('src', 'img/adultos/adulto 250x250.png')

            } else {
                //imagem idoso
                img.setAttribute('src', 'img/idosos/idoso 250x250.png ')
            }
        } else if ('fsex[1].checked') {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //imagem criança
                img.setAttribute('src', 'img/crianças/menina 250x250.png ')

            } else if (idade < 21) {
                //imagem jovem
                img.setAttribute('src', 'img/jovens/jovem menina 250x250.png ')

            } else if (idade < 50) {
                //imagem adulta
                img.setAttribute('src', 'img/adultos/adulta 250x250.png ')

            } else {
                //imagem idosa
                img.setAttribute('src', 'img/idosos/idosa 250x250.png ')

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
