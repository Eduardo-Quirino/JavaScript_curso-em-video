function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente! ')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = `Homem`
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/bebe/bebe menino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovens/jovem menino 250x250.png')

            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adultos/adulto 250x250.png')

            } else {
                //idoso
                img.setAttribute('src', 'img/idosos/idoso 250x250.png')

            }
        } else if (fsex[1].checked) {
            gênero = `Mulher`
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/bebe/bebe menina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovens/jovem menina 250x250.png')

            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adultos/adulta 250x250.png')

            } else {
                //idoso
                img.setAttribute('src', 'img/idosos/idosa 250x250.png')

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}