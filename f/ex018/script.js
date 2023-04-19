function parimpar(n) {
    if (n%2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}
var res = parimpar(111)
console.log(res)


//Recursividade

function fatorial(n) {
    if (n < 0 ) {
        return "Não existe"
    }else if(n == 0 || n == 1) {
        return 1
        } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))