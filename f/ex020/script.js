let pessoa = {
    nome: 'Jota', sexo: 'M', peso: 75, engordar(p){
        this.peso += p
    }
}
pessoa.engordar(2)
console.log(pessoa)