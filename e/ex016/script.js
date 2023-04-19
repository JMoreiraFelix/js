function contar() {
    var inicio = document.getElementById('txti')
    var i = Number(inicio.value)
    var fim = document.getElementById('txtf')
    var f = Number(fim.value)
    var passo = document.getElementById('txtp')
    var p = Number(passo.value)
    var resultado = document.getElementById('res')
    
    if (inicio.value.length == '' || fim.value.length == '' || passo.value.length == '') {
        //Sem algum dado
        resultado.innerHTML = "Impossível de contar :("
    } else if (p <= 0) {
        //Passo inválido
        alert("[PASSO INVÁLIDO ! SERÁ CONSIDERADO PASSO = 1]")
        p = 1
        soma = i + p
        resultado.innerHTML = `${i} `
        while (soma <= f ) {
            resultado.innerHTML += `/ ${soma} `
            soma += p
            }
    } else if (i < f) {
        soma = i + p
        resultado.innerHTML = `${i} `
    while (soma <= f ) {
        //Contagem crescente
        resultado.innerHTML += `/ ${soma} `
        soma += p
        }
    } else if (i > f) {
        p *= (-1)
        soma = i + p
        resultado.innerHTML = `${i} `
        while (soma >= f ) {
            //Contagem decrescente
            resultado.innerHTML += `/ ${soma} `
            soma += p
            }
    }
}