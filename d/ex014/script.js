var mensagem = document.getElementById('msg')
var imagem = document.getElementById('img')
var data = new Date()
var hora = data.getHours()
mensagem.innerHTML = `Agora são ${hora} horas.`
if (hora < 12) {
    mensagem.innerHTML += " Bom dia!"
    imagem.src = 'img/manha-250.png'
    document.body.style.backgroundColor = '#e2cd9f'
} else if (hora < 18) {
    mensagem.innerHTML += " Boa tarde!"
    imagem.src = 'img/tarde-250.png'
    document.body.style.backgroundColor = '#b9846f'
} else {
    mensagem.innerHTML += " Boa noite!"
    imagem.src = 'img/noite-250.jpg'
    document.body.style.backgroundColor = '#515154'
}