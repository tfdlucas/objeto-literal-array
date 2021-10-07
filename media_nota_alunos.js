var notas_aluno = [
    7, 8, 6, 5, 8, 6
];

var total_notas = notas_aluno.length;
var soma_notas = notas_aluno[0] + notas_aluno[1] + notas_aluno[2] + notas_aluno[3] + notas_aluno[4] + notas_aluno[5];
var media_aluno = (soma_notas / total_notas).toFixed(2);

console.log("Média dos alunos: " + media_aluno); // MÉDIA 6.67