// Declaração de vaviáveis 

let a = 1;
const b = 1;
a = 2
// b = 2; // erro, não é possível alterar constante

// Atribuição via desestruturação

let primos = [2, 3, 5, 7, 11, 13];
// Desestruturaçõa de array
let [p1, p2, ...resto] = primos;
// Corresponde a let p1 = primos[0], p2 = primos[1]

let curso = {
    nome: 'Bootcamp Front End',
    presencial: false,
    turma: 1
};
// Desestruturação de objeto
let {nome, turma, ...outrosCampos} = curso;
// Corresponde a let nome = curso.nome, turma = curso.turma

// Spread operator
let numerosPrimos = [...primos]; // Os três pontos é chamado de Spread operator

//Template Strings
let n1 = 1, n2 = 3;
let soma = n1 + n2;

console.log(`${n1} + ${n2} = ${soma}`);

//Arrow functions
function soma(a,b){ return a+b;} // Isso pode ser usado como exposto abaixo

const soma = (a,b) => a+b;
// OU
const soma = (a,b) => {
    return a+b;
}

//Funções map, filter e find

// Transforma array de objetos para array de strings
let names = nomesProfessores.map((item) => item.name);

// Obtém apenas professores que ensinam programação
let nomesProfessoresDev = nomesProfessores.filter((item) => item.area == "DEV");

// Encontra e retorna o primeiro. Caso não encontre, retorna NULL
let nomeProfessorDev = nomesProfessores.find((item) => item.area == "DEV");