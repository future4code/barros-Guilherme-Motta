// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {

  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = parseInt(prompt("Digite a altura do retangulo"));
  const largura = parseInt(prompt("Digite a largura do retangulo: "));

  const area = altura * largura;
  console.log(area);
}


// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = parseInt(prompt("Digite o ano atual: "));
  const anoNascimento = parseInt(prompt("Digite o ano que você nasceu "));

  const idade = anoAtual - anoNascimento;
  console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  
  return peso/ (altura * altura);
}
// let imc = calculaIMC(57, 1.69);
// console.log(imc);



// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Digite o seu nome: ");
  let idade = prompt("Digite a sua idade: ");
  let email= prompt("Digite o seu email :");

console.log("Meu nome é "+ nome +", tenho "+ idade +" anos, e o meu email é "+ email +".");
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt("Digite a sua 1º cor favorita: ");
  let cor2 = prompt("Digite a sua 2º cor favorita: ");
  let cor3 = prompt("Digite a sua 3º cor favorita; ");

  const cores = [cor1, cor2, cor3];
  console.log(cores);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  
  let str = string
  return str.toUpperCase();
}
// let str = retornaStringEmMaiuscula();
// console.log(str.toUpperCase());


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {

 return custo / valorIngresso;
}
// let balanco = calculaIngressosEspetaculo();
// console.log(balanco);
  

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  
  let a = string1;
  let b = string2;

  return a >= b;
}
const resultado1 = checaStringsMesmoTamanho();
console.log(resultado1);


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {

  let arr = array;

  return arr[0];
}



// EXERCÍCIO 10
function retornaUltimoElemento(array) {

  let arr1 = array;

  return arr1[array.length - 1];
}


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const index = array.length;
  const primaryPosition = array[0];
  const lastPosition = array[index - 1];

  array.shift();
  array.pop();

  array.push(primaryPosition);
  array.unshift(lastPosition);

   return array;
}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let texto1 = string1;
  let texto2 = string2;

  let mudar1 = texto1.toUpperCase(string1);
  console.log(mudar1);
  let mudar2 =  texto2.toUpperCase(string2);
  console.log(mudar2);

  let comparacao = mudar1 == mudar2;

  return comparacao;
}
const resultado001 = checaIgualdadeDesconsiderandoCase();
console.log(resultado001);


// EXERCÍCIO 13 
function checaRenovacaoRG(){
  //implemente sua lógica aqui

const anoAtual = parseInt(prompt("Digite o ano atual: "));
const anoNascimento = parseInt(prompt("Digite o ano do seu nascimento: "));
const anoDeEmissao = parseInt(prompt("digite o ano que a sua carteira de identidade foi emitida: "));

let idade = anoAtual - anoNascimento;
let renovacao = anoAtual - anoDeEmissao;

// menos de 20 anos ::

const menosDe20 = idade <=20 && renovacao == 5 || renovacao === 5;
console.log(menosDe20);

const intervaloDeIdade = idade > 20 || idade <= 50 && renovacao === 10;
console.log(intervaloDeIdade);

const acimaDe50 =  idade > 50 && renovacao == 15;
console.log(acimaDe50);

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
}