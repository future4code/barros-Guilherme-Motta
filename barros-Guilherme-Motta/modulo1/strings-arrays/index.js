//exercicios de interpretação de código

// 1:

/* a) provavelmente aparecerá indefinido(undefined), pois não foi atribuido nenhuhm valor para o meu Array;

b)imprimirá o valor NULL;

c)imprimirá o tamanho do array, sendo ele 10 itens.

d)O console mostrará o primeiro elemento do meu array, nesse caso é o número 3;

e)Irá somar o valor do indice + 1, que irá gerar um novo indice e depois será atribuido um valor para esse novo indice;

f) A const valor irá receber o valor do indice que foi selecionado, nesse caso o indice foi o 7º e irá imprimir o valor do indice 7 que é o número 9.
*/

/*2:

Primeiro será colocado tudo em maiusculo, depois através da propriedade replaceAll, no caso do exemplo, todo A será transformado em I, e depois mostrará quantas letras tem a minha frase;*/

//  EXERCICIOS DE ESCRITA DE CÓDIGO:

// 1)

let email = prompt("Digite o seu email: ");
console.log(email.trim());

// 2)

const comidas = ["tomate", "pudim", "ovo", "batata frita", "pão doce"];
console.log(comidas);

console.log("Essas são as minhas comidas favoritas: \n"
+ comidas[0] + 
"\n"+ comidas[1] +
"\n"+ comidas[2] + 
"\n"+ comidas[3] +
"\n"+ comidas[4]);

const comidaFavorita = prompt("Digite a sua comida favorita: ");
console.log(comidaFavorita);

let a = comidas.splice(1,1);
console.log(a);

console.log(comidas);
comidas.splice(1,0, comidaFavorita);
console.log(comidas);


// 3) 

let listaDeTarefas = [ ];

let tarefa1 = prompt("Digite a 1º tarefa que você realizará hoje: ");
let tarefa2 =(prompt("Digite a 2º tarefa que você realizará hoje: "));
let tarefa3 =(prompt("Digite a 3º tarefa que você realizará hoje: "));

console.log(tarefa1);
console.log(tarefa2);
console.log(tarefa3);

const adicionar = listaDeTarefas.unshift(tarefa1);
console.log(listaDeTarefas);

listaDeTarefas[1] = tarefa2;
console.log(listaDeTarefas);

const adicionar2 = listaDeTarefas.push(tarefa3);
console.log(listaDeTarefas);

let selecao = Number(prompt("Digite um número de 0 a 2: \n 0 -> tarefa1, \n 1 -> tarefa2, \n 2 -> tarefa3"));

console.log(selecao);

listaDeTarefas.splice(selecao,1);

console.log(listaDeTarefas);



//  DESAFIOS :

// 1)
const frase01 = prompt("digite um frase: ");
console.log(frase01);
let transformacao = frase01.split(" ", 5);
console.log(transformacao);


// 2)

const array01 = ["banana", "morango", "abacaxi", "laranja","ameixa"];

console.log(array01[2]);
console.log(arr.length);
