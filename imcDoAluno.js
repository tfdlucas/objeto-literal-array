var aluno_academia = {
    id: 10,
    nome: "Lucas Shane",
    altura: 1.75,
    peso: 69
};

var nome_aluno = aluno_academia.nome;
var peso_aluno = aluno_academia.peso;
var altura_aluno = aluno_academia.altura;

var imc_aluno = (peso_aluno / (altura_aluno * altura_aluno)).toFixed(2);

console.log("O IMC do aluno é de: " + imc_aluno);

if ( imc_aluno < 18.5) {
    console.log("O aluno " + nome_aluno + " está abaixo do peso.");
} else if ( imc_aluno >= 18.5 && imc_aluno <= 24.99 ) {
    console.log("O aluno " + nome_aluno + " está com o peso nomral.");
} else {
    console.log("O aluno " + nome_aluno + " está acima do peso.");
}

// O IMC do aluno é de: 22.53
// O aluno Lucas Shane está com o peso normal.