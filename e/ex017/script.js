function gerar() {
    var numero = document.getElementById('txtn')
    if (numero.value.length == 0) {
        alert('[ERROR] INSIRA UM VALOR')
    } else {
        var tabuada = document.getElementById('tab')
        tabuada.innerHTML = ''
        var n = Number(numero.value)
    for (var contador = 1; contador <= 10; contador++) {
        var item = document.createElement('option')
        item.text = `${n} x ${contador} = ${n * contador}`
        item.value = `tabuada ${contador}`
        tabuada.appendChild(item) 
        }
    }
}