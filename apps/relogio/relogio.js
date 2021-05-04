function carregar() {
    var img = document.createElement('img')
    img.setAttribute('id', 'img')
    img.setAttribute('width', '250')
    img.setAttribute('height', '250')
    var txt = window.document.getElementById('msg')
    var foto = window.document.getElementById('foto')
    var txt2 = window.document.getElementById('msg2')
    var time = new Date()
    var hora = time.getHours()
    var min = time.getMinutes()
    if (min < 10) { min = '0' + min }
    txt.innerHTML = `<h1>${hora}:${min}</h1>`
    if (hora >= 6 && hora < 12) {
        txt2.innerHTML = `<h2 style='text-transform: capitalize;'>bom dia!</h2>`
        img.setAttribute('src', 'relogio/sunrise.jpg')
        foto.appendChild(img)
        document.body.style.background = 'linear-gradient(to top, rgb(251, 255, 36), rgb(255, 176, 29), red, rgb(201, 124, 201), rgb(119, 201, 255), rgb(4, 172, 238), rgb(110, 110, 235))'
    } else if (hora >= 12 && hora < 18) {
        txt2.innerHTML = `<h2 style='text-transform: capitalize;'>boa tarde!</h2>`
        img.setAttribute('src', 'relogio/sunset.jpg')
        foto.appendChild(img)
        document.body.style.background = 'linear-gradient(to top, rgb(251, 255, 36), rgb(212, 138, 0), rgb(201, 6, 6), rgb(100, 1, 100), rgb(0, 0, 119))'

    } else {
        txt2.innerHTML = `<h2 style='text-transform: capitalize;'>boa noite!</h2>`
        img.setAttribute('src', 'relogio/night.jpg')
        foto.appendChild(img)
        document.body.style.background = 'linear-gradient(to top, rgb(0, 0, 119), rgb(0, 0, 37))'
    }
}