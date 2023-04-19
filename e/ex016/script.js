function contar() {
    var inicio = document.getElementById('txti')
    var i = Number(inicio.value)
    var fim = document.getElementById('txtf')
    var f = Number(fim.value)
    var passo = document.getElementById('txtp')
    var p = Number(passo.value)
    var resultado = document.getElementById('res')
    
    var soma = i + p
    if (inicio.value.length == '' || fim.value.length == '' || passo.value.length == '') {
        alert("[ERROR]")
        resultado.innerHTML = "Impossível de contar :("
    } else if (p == 0) {
        alert("[PASSO INVÁLIDO ! SERÁ CONSIDERADO PASSO = 1]")
        p = 1
        soma = i + p
        resultado.innerHTML = `${i} `
        while (soma <= f ) {
            resultado.innerHTML += `/ ${soma} `
            soma += p
            }
    } else {
        resultado.innerHTML = `${i} `
    while (soma <= f ) {
        resultado.innerHTML += `/ ${soma} `
        soma += p
        }
    }
}