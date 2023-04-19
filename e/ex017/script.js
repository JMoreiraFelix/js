function gerar() {
    var numero = document.getElementById('txtn')
    var n = Number(numero.value)
    if (numero.value.length == 0) {
        alert('[ERROR] INSIRA UM VALOR')
    } else {
        resultado = document.getElementById('res')
        resultado.innerHTML = ''
    for (var contador = 1; contador <= 10; contador++) {
        multiplicação = n * contador
        resultado.innerHTML += `<p> ${n} x ${contador} = ${multiplicação} </p>`
        }
    }
}