// /*  1. o primeiro console irá imprimir 10 da var b
//   Enquanto o segundo console irá imprimir a = 10 e b=5

//  2. O console irá imprimir c=10, b=10 e a=10

//  3. todas as duas var estão recebendo um prompt, que serve para criar um caixa de inserção de dados.
//  A primeira variável  poderia receber o nome horasTrabalhadas, Enquanto a segunda poderia receber o nome salárioDiário.
//  A ultima parte do programa tem um alert, que tem a função de criar um caixa de AVISO para o usuário, que nesse caso está avisando o resultado da conta entre as duas variaveis declaradas anteriormante*/


// // exericios de scrita de codigo
// // 1.
let nome = " ";
let idade =
    console.log(typeof nome);
console.log(typeof idade);

/*no primeiro console imprimiu o tipo String, pois tudo o que for declarado dentro de aspas sempre será uma string , enquanto no segundo console irá imprimir  UNDEFINED(indefinido), isso quer dizer que uma varivael só foi declara e não foi iniciada, ela só será iniciada quando passar uma valor para ela.*/

nome = prompt("digite o seu nome: ");
idade = prompt("digite a sua idade: ");
console.log(nome);
console.log(idade);

/*f. A grande diferença é que além de agora eu te atribuido um valor para as duas variaveis declaradas anteriormente, quando eu peço para inserir um usuário inserir um dado numerico no prompt o mesmo retorna um dado do tipo string.*/

console.log("O seu nome é " + nome + " e a sua idade é " + idade);

// 2.

let a = true;
let b = false;
let c = true;

console.log("Você está bem ? " + a);
console.log("Você está com fome? " + c);
console.log("Você quer comer uma carninha? " + b);


// 3.

/*primeiro jeito de resolver*/

let num1 = prompt("digite o numero1 :");
let num2 = prompt("digite o numero2 :");

console.log("num1 = " + num2);
console.log("num2 = " + num1);

/*segundo jeito de resolver */


let nuA = 10;
let nuB = 25;
let nuC = " ";

const altera = Number(nuC)

nuC = nuA;
nuA = nuB;
nuB = nuC;

console.log("O novo numero A é: " + nuB);
console.log("O novo numero B é: " + nuA);


/*    DESAFIO  */
alert("Aqui começa o desafio!!");

let numero1 = prompt("digite o 1º número: ");
let numero2 = prompt("Digite o 2º número: ");

let d = parseFloat(numero1);
let e = parseFloat(numero2);

var soma = d + e;
console.log("O resultado da soma do numero 1 com o numero 2 foi: " + soma);

var mult = d * e;
console.log("O resultado da multiplicação do numero 1 com o numero 2 foi: " + mult);


