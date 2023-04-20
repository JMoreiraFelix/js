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
        alert('OK')
    } else {
        alert('[ERROR] NÚMERO INVÁLIDO')
    }
}