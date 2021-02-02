function carregar() {
    var msg = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours()
        msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //    BOM DIA!
        img.src = `img/amanhecer.png`
        document.body.style.background = `#fdb376`
    } else if (hora >= 12 && hora < 18) {
        //  BOA TARDE!
        img.src = `img/entardecer.png`
        document.body.style.background = `#a62608`
    } else {
        //BOA NOITE!
        img.src = `img/anoitecer.png`
        document.body.style.background = `#0a2742`
    }
}