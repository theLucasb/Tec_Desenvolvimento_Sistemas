/* DESAFIO EM DUPLA */

/* Desenvolver uma aplicação utilizando os conceitos que aprendemos
até agora para criar uma validação de notas com um programa */

/* PROIBIDO CHATGPT OU QUALQUER OUTRA IA */

/* var nota1 = 7 */

/* function (nota) {
    switch (nota){
        case 10:
            return "A+";
        case 9:
            return "A";
        10 = A+
        9 = A
        8 = B+
        7 = B
        6 = C+
        5 = C
        4 = D+
        3 = D
        2 = E+
        1 = E
        0 = F
        default = "mensagem de erro"
    }
} */

/* imprimir na tela a nota1 */

let nota1 = 7;

function validarNotas(nota) {
    switch (nota) {
        case 10:
            return "A+";
        case 9:
            return "A";
        /* 
        case 8... 
        */
        default:
            return "Mensagem de Erro";
    }
}