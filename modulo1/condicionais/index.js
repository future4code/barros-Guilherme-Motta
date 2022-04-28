//-------------exercícios de interpretação de código-------------------


/* 1)

A => o código cria uma condicional de teste, que serve para testar uma comparação de uma operação matemática, sendo essa operação matemática de divisão, mas com O MÓDULO que exibi se um número é par ou impar.
No caso do teste se o número digitado pelo usuário for divido pelo modulo de 2 e for igual a zero o usuário irá passar no teste, caso contrário ele reprovará no teste.

B => O usuário passará no teste quando ele digitar qualquer número par

C => Quando o usuário digitar qualquer número ímpar, ele não passará no teste.  */


/*  2)

A => O código serve para que o usuário digite um nome de uma fruta que tem no mercado, e dependendo do valor que o usuário passar seráe xecutado cada CASE Específico, sendo assim, ele imprimirá o nome da fruta + o seu respectivo preço 

B => O preço da fruta Maçã é  R$ 2.25 

C => O console iria imprimir todos os cases que não possuem um break,
sendo ele somente o caso da PÊRA       */   


/* 3)

A => Esta pedindo para o usuario digitar um numero, através do prompt, e trasnformando esse valor em um número.

B => Se o número for maior do que 10 ele passará na condição e imprimirá a mensagem que está no primeiro console, o mesmo que está dentro de if, ja a segunda mensagem dará erro por conta do escopo local de let.  Se o usuário digitar -10 não será impresso nada além de dá erro. 

C => Como falei anteriormente, na questão B, haverá erro por conta do escopo local da variavel LET.  */


//--------------Exercícios de escrita de código------------------------


// 1)

const idade = parseInt(prompt("Digite a sua idade: "));

idade >= 18 ? console.log("Você pode dirigir") : console.log("Infelizmente você não pode dirigir, pois é menor de idade.");


// 2) 
let turnoAula = Number(prompt(`Digite o turno em que você estuda: 
m => 1
v => 2
n => 3`));

if(turnoAula ===1) {
    console.log("Bom dia!");
}
else{
    if(turnoAula ===2){
        console.log("Boa tarde!");
    }
    else{
        if(turnoAula===3){
            console.log("Boa noite!");
        }
        else{
            console.log("Você não estuda!!");
        }
    }
}


// 3)
/* 1 == matutino ou m;
   2 == vespertino ou v;
   3 == noturno ou n;
*/

switch (turnoAula){
    case 1:
    console.log("Bom dia!");
    break;
    case 2:
    console.log("Boa tarde!");
    break;
    case 3:
    console.log("Boa noite!");
    break;
    default:
    console.log("Você não estuda aqui");
    break;
}


// 4)


const generoFilme = prompt("Digite qual gênero de filme você irá ver: ");



const precoIngresso = Number(prompt("Digite qual é o preço do ingresso: "));

if(generoFilme=== "fantasia" && precoIngresso < 15){
    console.log("Bom filme");
}
else{
    console.log("Escolha outra filme, por favor :( ");
}


//--------------------------DESAFIOS----------------------------------


// 1)

const lanchinho = prompt("Digite qual lanche você vai comprar: ");

if(generoFilme=== "fantasia" && precoIngresso < 15){
    
    console.log(`Bom filme e Aproveite o seu ${lanchinho}`);
}
else{
    console.log("Escolha outra filme, por favor :( ");
}


// 2)



