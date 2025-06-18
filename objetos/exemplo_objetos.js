const aluno = {
    nome: "Lucas",
    idade: 17,
    curso: "Desenvolvimento de Sistemas"
};

console.log(aluno.nome);
console.log(aluno["idade"]);
console.log(aluno);

aluno.matricula = "2025A";
console.log(aluno);

delete aluno.curso;
console.log(aluno);
