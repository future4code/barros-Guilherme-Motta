//---------exercicios de interpretação de codigo----------------------

/* 1)
O codigo está fazendo um laço com a estrutura de repetição FOR.
Onde, a variavel valor recebara a soma de todos os I que são menores que 5, resultando em 10

/* 2)
A =>  será impresso no console os números maiores que 18
Caso eu queria acessar o indice desse elementos ao invés do elemnto em si, basta usar o for in no lugar do for of.

ex: const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for(let numero in lista){
    console.log(numero);
}
*/


/* 3) Iria mostrar uma sequencia de asterisco em ordem crescente de cima para baixo: 
*
**
***
****          */

//------------exercicios de escrit de código--------------------

// 1)

let perguntaUsuario = parseInt(prompt("Quantos bichinhos de estimação você tem: "));

const listaDePet = [];

if(perguntaUsuario == 0){
    console.log("Que pena! Você pode adotar um pet!");
}
else if(perguntaUsuario > 0){

    for(let i=0; i<perguntaUsuario;i++){
        let nomePet=prompt("Digite o nome do seu pet:");
        listaDePet.push(nomePet);
        console.log(listaDePet)
    }
    
}

// 2)

const array = [10, 20, 24, 36, 100,48, 90, 299, 157, 625];

// resposta A:
function printArray(){
    for(let i of array){
        console.log(i);
    }
    
}
printArray();

// resposta B:
const divisaoPor10 = function(){
for (let i of array){
    console.log(i / 10);   }
}
divisaoPor10();

// RESPOSTA C:

function newArray(){
    let newArray = [];
    for(let i of array){
        let divisao = i % 2;
        if(divisao == 0){
        newArray.push(i);}
    }
    console.log(newArray);
}
newArray();

// RESPOSTA D:
function letraD (){
    const arrayStrings = [];
    let i=0;
    for(let valor of array){
        arrayStrings.push(`O elemento index ${i} é ${valor}`);
        i++;
        console.log(arrayStrings);
    }
}
letraD();

// RESPOSTA E:



//-------------------------desafios---------------------------------

// 1)

console.log("Vamos jogar!");
const insereUmNumero = Number(prompt("Digite um numero: "));

for(let i=0; i < insereUmNumero; i++) {
const chutaNumero = Number(prompt("Chute algum numero: "));
console.log("O numero chutado foi: "+ chutaNumero);

    if(insereUmNumero > chutaNumero || insereUmNumero < chutaNumero){
        console.log("Errou o numero escolhido foi: "+ chutaNumero);
    }
    else if(insereUmNumero == chutaNumero){
        console.log("Parabéns, você acertou!");
        break;
    }
}

// 2)

const numeroAleatorio = parseInt(Math.random()*100 +1);
console.log(numeroAleatorio);

for(let j=0; j< numeroAleatorio;j++){
    const chutaNumero = Number(prompt("Chute algum numero: "));
    console.log("O numero chutado foi: ");

    if(numeroAleatorio > chutaNumero || numeroAleatorio < chutaNumero){
        console.log("Errou! O número escolhido foi: "+ chutaNumero);
    }
    else if(numeroAleatorio == chutaNumero){
        console.log("Parabéns, você acertou!");
        break;
    }
}









