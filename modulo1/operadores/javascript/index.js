/* Exercícios de interpretação */

/*1. 

a) true && false => false
b)true && false && true => false
c) true && (true || false) => true
d)dado booleano*/

/*2 e 3:

Dará erro na soma, pois qualquer dado que seja inserido através de um prompt é do tipo "string" e quando tem uma soma entre duas "strings" não ocorre a soma de fato, mas sim uma concatenação entre as "strings" envolvidas na soma.
Será imprido a concatenação dos dois números escritos pelo usuário.
Para resolver esse problema ele deveria que tranformar os dados inseridos pelo prompt em número, para isso ele poderia usar as props. parseInt(),que transforma uma string em um número inteiro, ou ainda poderia usar o parseFloat(), que transforma uma string em um número real.*/

/*Exercícios de escrita de código*/

/*1:*/

let nome = prompt("Digite o seu nome: ");
let idade = parseInt(prompt("Digite a sua idade: "));

let idade2 = parseInt(prompt("Digite a idade do seu melhor amigo: "));

console.log("O seu nome é: " + nome);
console.log("A sua idade é: " + idade);
console.log("A idade do seu amigo é: " + idade2);
console.log("A sua idade é maior do quê do seu amigo: " + idade > idade2);

console.log("A diferença de idade de vocês dois é", idade - idade2, " anos");


/*2: */

let numPar = parseInt(prompt("Por favor, digite um número par "));

let div = numPar % 2;

console.log("O número escolhido foi: " + numPar);
console.log("O resto da divisão é: " + div);

/*Obviamente que o resto da divisão de um número par por um número par será sempre ZERO*/
/*Se o usuário digitar um número ímpar sempre dará um resto, por exemplo, resto da divisão de 5 e 2 (5 % 2) dará 1.  */

/*3: */

/*Obs: eu não considerei os anos bissextos, além de conseiderar que um dia possui 24 horas;*/

const idadeEmAnos = parseFloat(prompt("Digite a sua idade "));

console.log("A sua idade é " + idadeEmAnos + " anos");

let ano = 12;
const idadeEmMeses = ano * idadeEmAnos;
console.log("A sua idade em meses é: " + idadeEmMeses + " meses");

let diasDoAno = 365;
const idadeEmDias = diasDoAno * idadeEmAnos;
console.log("A sua idade em dias é: " + idadeEmDias + " dias");

let horasPorDia = 24;
let horaAnual = horasPorDia * 365;
const idadeEmHoras = horaAnual * idadeEmAnos;
console.log("A sua idade em horas é: " + idadeEmHoras + " horas");

/*4: */

const numero1 = parseInt(prompt("Digite o primeiro número: "));
const numero2 = parseInt(prompt("Digite o segundo número: "));


console.log("O 1º número é maior que o 2º: ", numero1 > numero2);
console.log("O 1º número é igual ao 2º: ", numero1 == numero2);

let resultado = numero1 % numero2;
console.log("O 1º número é divisível pelo 2º: ", resultado == 0);

let resultado2 = numero2 % numero1;
console.log("O 2º número é divisível pelo 1º:", resultado == 0);


/* desafio   */


/*1: */

const conversaoA = (77 - 32) * (5 / 9) + 273.15;
console.log("O valor da conversão de 77 ºF em K é " + conversaoA);

const conversaoB = (80) * (9 / 5) + 32;
console.log("O valor da conversão de 80 ºC em ºF é " + conversaoB);

const conversaoC = 30 * (9 / 5) + 32;
const conversaoD = (conversaoC - 32) * (5 / 9) + 273.15;
console.log("O valor 30 ºC equivale a " + conversaoC + "  ºF, e equivale a " + conversaoD + " K");

let grausC = parseInt(prompt("Digite um valor que corresponda a ºC "));
let mudaDeCParaF = grausC * (9 / 5) + 32;
let mudaDeFParaK = (mudaDeCParaF - 32) * (5 / 9) + 273.15;
console.log(grausC + " ºC equivale a " + mudaDeCParaF + "ºF, e equivale ao mesmo tempo a " + mudaDeFParaK + " K");

/*2: */

let horaDeConsumo = parseFloat(prompt("Digite a quantidade de hora que você gastou em kwh: "));
const gastoTotal = 0.05 * horaDeConsumo;

console.log("o valor a ser pago pelo consumo de " + horaDeConsumo + "Kwh, é " + gastoTotal + ",00 R$");

const desconto = gastoTotal * 0.15;
console.log("Se você pagar à vista receberá um desconto de 15%," + "sendo assim, você terá um descontro de " + desconto);
console.log("Terá que pagar ", gastoTotal - desconto);











