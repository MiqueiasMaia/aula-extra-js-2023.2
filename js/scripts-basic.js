/**
 * 
 * 1 - Tipos de dados
 * 2 - Tipos de variaveis
 * 3 - Operadores
 * 4 - Condicionais
 * 5 - Arrays
 * 6 - Loops
 * 7 - Objetos
 * 8 - Funções
 * 9 - Interação do JS com a página HTML (Modificando ou interagindo com o DOM)
 * 10 - Consumo de dados de uma API (Api Star Wars)
 * 
 */

// Criação de variáveis
var numero1 = 10; //Number
var nomeDaPessoa = "Pedro"; //string
var numero2 = 10.3; //Number
var booleano = true; //boolean

//Reatribuição de variáveis
numero1 = "10"; //String

//Exibição de variáveis
// console.log(numero1);
// console.log(numero2);
// console.log(nomeDaPessoa);
// console.log(booleano);

//Criação de strings
var textoConcatenado = 'O PRIMEIRO NUMERO É '+ numero1 + ' | O NOME DA PESSOA É ' + nomeDaPessoa + ' | O SEGUNDO NÚMERO É ' + numero2;
var textoConcatenado2 = "O PRIMEIRO NUMERO É "+ numero1 + " | O NOME DA PESSOA É " + nomeDaPessoa + " | O SEGUNDO NÚMERO É " + numero2;
// console.log(textoConcatenado);
var textoConcatenado2 = `O PRIMEIRO NÚMERO É ${numero1} | O NOME DA PESSOA É ${nomeDaPessoa} | O SEGUNDO NÚMERO É ${numero2}`;

//Operadores matemáticos
var numero10 = 100;
var numero11 = 10;
var numero12 = 25;
var soma = numero10 + numero11;
var subtracao = numero10 - numero11;
var multiplicacao = numero10 * numero11;
var divisao = numero10 / numero11;
var restoDaDivisao = numero10 % numero11;
var operacaoComplexa = (numero10 + (numero11 - numero10)) * numero12;
// console.log(operacaoComplexa);

//Condicionais
if (operacaoComplexa > numero1) {
    // console.log("A operação complexa é maior que o numero 1");
} else if (numero1 === numero11) { //false
    // console.log("Os números são iguais");
} else if (operacaoComplexa <= numero1) {
    // console.log("A operação complexa é menor que o numero 1");
}

//Arrays
var primeiroArray = [1,2,3,4,5,6];
var segundoArray = [1.1, 2.2, 3.3, 4.4, 5.5, 6.6];
var terceiroArray = ["Pedro", "João", "Maria", "José"];
var quartoArray = [true, false, true, false];
var quintoArray = [1, 1.1, "Pedro", true];
var sextoArray = [primeiroArray, segundoArray, terceiroArray, quartoArray, quintoArray];
// console.log(sextoArray[0][1]);

//Loops
for(var i = 0; i<terceiroArray.length; i++) {
    // console.log(`posição ${i}: valor ${terceiroArray[i]}`);
}

for (const propriedade of terceiroArray) {
    // console.log(propriedade);
}

//Objetos
var modelo = "Fusca";
var marcar = "Volkswagen";
var ano = 1970;
var cor = "Azul";
var preco = 10000;

var carro = {
    modelo: "Fusca",
    marca: "Volkswagen",
    ano: 1970,
    cor: "Azul",
    preco: 10000,
};
// console.log(carro);
var carroArray = ["Fusca", "Volkswagen", 1970, "Azul", 10000];
// console.log(carroArray);

var notasArray = [10, 8, 7, 9, 10, 5, 6, 7, 8, 9, 10];
var notasObjeto = {
    biologia: 10,
    quimica: 8,
    matematica: 7,
    redacao: 9,
    literatura: 10,
    gramatica: 5,
    filosofia: 6,
    sociologia: 7,
    historia: 8,
    geografia: 9,
    ingles: 10,
};
console.log(notasArray);
console.log(notasObjeto);

const professor = {
    nome: "Pedro",
    idade: 25,
    materia: "Programação",
};

const alunos = [
    {
        nome: "Pedro",
        idade: 25,
        materia: "Programação",
    },
    {
        nome: "João",
        idade: 25,
        materia: "Programação",
    },
    {
        nome: "Maria",
        idade: 25,
        materia: "Programação",
    },
    {
        nome: "José",
        idade: 25,
        materia: "Programação",
    }
];

const salaDeAula = {
    professor: professor,
    materia: "Programação",
    periodo: "Noturno",
    quantidadeMaximaDeAlunos: 10,
    alunos
};

console.log(salaDeAula);
