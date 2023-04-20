
var numero = document.getElementById('txtn')
var tabela = document.getElementById('tab')
var resultado = document.getElementById('res')
var valores = []

function isNumero(n) {
    if (Number(n) > 0 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inTabela(n, t) {
    if (t.indexOf(Number(n)) == -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(numero.value) && inTabela(numero.value, valores)) {
        valores.push(Number(numero.value))
        var item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado.`
        tabela.appendChild(item)
    } else {
        alert('[ERROR] NÚMERO INVÁLIDO')
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('[ERROR] SEM VALORES')
    } else {
        var resultado = document.getElementById('res')
        resultado.innerHTML = `<p>Ao todo, temos ${valores.length} números.<\p>`

        var max = Math.max(...valores)
        resultado.innerHTML += `<p>O maior valor informado foi ${max}.<\p>`

        var min = Math.min(...valores)
        resultado.innerHTML += `<p>O menor valor informado foi ${min}.<\p>`

        var soma = 0
        for (var c = 0; c < valores.length; c++) {
            soma += valores[c]
        }
        resultado.innerHTML += `<p>A soma de todos os valores é ${soma}.<\p>`

        var media = soma / valores.length
        m = String(media)
        media = m.replace("." , ",")
        resultado.innerHTML += `<p>A média de todos os valores é ${media}.<\p>`
    }
}