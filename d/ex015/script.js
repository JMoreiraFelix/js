function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var nascimento = document.getElementById('txtano');
    var resultado = document.getElementById('res');
    if (nascimento.value.length == 0 || nascimento.value > ano) {
        alert('[ERRO] Data de nascimento inválida !')
    } else {
        var masculino = document.getElementById('m')
        var feminino = document.getElementById('f')
        var idade = ano - Number(nascimento.value)
        var genero = ''
        var imagem = document.getElementById('img')
        if (masculino.checked) {
            genero = 'Homem'
            if (idade <10) {
                imagem.src = 'img/foto-bebe-m.png'
            } else if (idade<30) {
                imagem.src = 'img/foto-jovem-m.png'
            } else if (idade<50) {
                imagem.src = 'img/foto-adulto-m.png'
            } else {
                imagem.src = 'img/foto-idoso-m.png'
            }
        } else if (feminino.checked) {
            genero = 'Mulher'
            if (idade <10) {
                imagem.src = 'img/foto-bebe-f.png'
            } else if (idade<21) {
                imagem.src = 'img/foto-jovem-f.png'
            } else if (idade<50) {
                imagem.src = 'img/foto-adulto-f.png'
            } else {
                imagem.src = 'img/foto-idoso-f.png'
            }
        }
        resultado.innerHTML = `${genero} com idade de ${idade}`
    }
}