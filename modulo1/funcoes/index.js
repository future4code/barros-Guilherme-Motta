//----------exercicios de interpretação de código---------------

//  1)

/* A = primeiro console => imprimirá 10, que será o resultado do produto entre o valor a variavel( que no inicio estva vazia) e qualquer valor que fosse atribuido para ela seria multiplicado por 5
segundo console => imprimirá 50. */
 /* B = Não acontecerá nada no console, pelo menos no meu não aconteceu.*/


 // 2)

 /* A = a função anônima que foi atribuida a variavel outraFuncao serve para transformar o texto, que foi inserido pelo usuário, em todas as letras em caixa baixa,ou seja, todas letras minusculas. Além disso, verifica se a palavra cenoura está presente na frase inserida pelo usuário*/

/* B = 
i => aparecerá true no console, pois o método includes verifica se uma palavra está dentro de um string ou array e retorna um valor booleano(true ou false);
ii => também será imprimido o valor true;
iii => Será imprimido o valor true;
*/ 

//----------------------exercicios de escrita de código----------------

// 1)
// A = 
// function dadosUsuario(){
//     let nome = prompt("Digite o seu nome: ");
//     let idade = Number(prompt("Digite a sua idade: "));
//     let cidadeOndeMora = prompt("Digite qual cidade você mora:")
//     let profissao = prompt("Digite qual é a sua atual profissão: ");

//     console.log("Eu sou "+ nome + ", tenho "+ idade + " anos, moro em "+ cidadeOndeMora + " e trabalho com "+ profissao);
// }
// dadosUsuario();

// B =

let infoPessoal = function(string, number, string2, string3){
    let nome = string;
    let idade = number;
    let cidade = string2;
    let profissao = string3;

    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`);
}
infoPessoal("Guilherme", 23, "Nova Friburgo", "programador");

// 2)

// A=
function soma (n1, n2){
    return n1 + n2;
}
let soma1 = soma(10,5);
console.log(soma1);

// B=

function comparadora (nu1,nu2){
    return nu1 >= nu2;
}
let resultado = comparadora(6, 5);
console.log(resultado);

// C=

function teste001(numero){
    let div = numero % 2;
    return div;
}
let resultado2 = teste001(10);
console.log(resultado2 == 0);

// D =

let mensagem = function(string){
    let frase = string;
    return frase.toUpperCase();
}
let resposta = mensagem("teste de frase ");
console.log(resposta);
console.log(resposta.length);

// 3

let numero1 = parseInt(prompt("digite o primeiro numero: "));
let numero2 = parseInt(prompt("Digite o segundo numero: "));

console.log("Numeros inseridos: "+ numero1 + " e "+ numero2);

function soma01 (){

    return numero1 + numero2;
}
const resultadoSoma = soma01();
console.log("Resultado da soma: " + resultadoSoma);

function sub01 (){
    return numero1 - numero2;
}
const resultadoSub = sub01();
console.log("Resultado da subtração: "+ resultadoSub);


function mult01 (){
    return numero1 * numero2;
}
const resultadoMult = mult01();
console.log("Resultado da multiplicação: "+ resultadoMult);

function div01 (){
    return numero1 / numero2;
}
const resultadoDiv = div01();
console.log("Resultado da divisão: "+ resultadoDiv);


// -------------desafioss ----------------------

// 1)

// A =



//   2)

let calculoDaHipotenusa = function(cat1, cat2){

    let calculo = Math.hypot(cat1, cat2);
    return calculo;
}

console.log(calculoDaHipotenusa(10, 5));

