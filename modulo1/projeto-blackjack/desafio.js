if(confirm("Você quer iniciar uma nova rodada? ")== true){
   console.log("Bora começar a rodada");

let cartas = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J" , "Q", "K"];

function cartasDoUsuario (){
   const carta1 = comprarCarta();
   const carta2 = comprarCarta();

   console.log(`A primeira carta sorteada para o usuário foi: ${carta1.texto}, essa carta vale ${carta1.valor} pontos`);

   console.log("A segunda carta sorteada para o usuário foi: "+ carta2["texto"]+ ", essa carta vale "+ carta2["valor"]+ " pontos");

   const somaPontos = carta1.valor + carta2["valor"];

   console.log("Usuário - cartas: "+ carta1["texto"]+ " " + carta2["texto"]+ " -  pontução: "+ somaPontos + " pontos");

   if(carta1.texto == cartas[0]){
      console.log("terá que sortear de novo");
      confirm("Você terá que sortea de novo");
   }
   else{
      console.log("Não precisa sortear novamente!");
   }
    
   return array = [carta1.texto, carta2.texto, somaPontos];
   
}

const cartasDoPc = function(){
   const carta1 = comprarCarta();
   const carta2 = comprarCarta();

   console.log("A primeira carta sorteada para o computador foi: "+ carta1.texto+ ", essa carta vale "+ carta1["valor"]+ " pontos");
   
   console.log(`A segunda carta sorteada para o computador foi: ${carta2.texto}, essa carta vale ${carta2["valor"]} pontos`);

   const somaPontos = carta1.valor + carta2["valor"];
   
   console.log(`Computador - cartas: ${carta1.texto}  ${carta2.texto} - pontuação: ${somaPontos} pontos`);

   if(carta1.texto == cartas[0]){
      console.log("terá que sortear de novo");
      confirm("Você terá que sortea de novo");
   }
   else{
      console.log("Não precisa sortear novamente!");
   }

   return array2 = [carta1.texto, carta2.texto, somaPontos];
}

let combinacaoUsuario = cartasDoUsuario();
let combinacaoPc = cartasDoPc();


if(confirm(`Suas cartas são: ${combinacaoUsuario[0]}  ${combinacaoUsuario[1]}. A primeira carta revelada do computador é ${combinacaoPc[0]}. 
Deseja comprar mais uma carta? `)== true){
   console.log("Você terá que comprar outra carta: ");
   const comprarNovamente = comprarCarta();}










const resultadoDoUsuario = combinacaoUsuario[array.length-1];
console.log(resultadoDoUsuario);
const resultadoDoPc = combinacaoPc[array.length-1];
console.log(resultadoDoPc);

if(resultadoDoUsuario == resultadoDoPc){
   console.log("Empate!");
}
else if (resultadoDoUsuario > resultadoDoPc){
   console.log("O usuário ganhou!");
}
else if (resultadoDoUsuario < resultadoDoPc){
   console.log("O computador ganhou!");}
  }
else{
   console.log("O jogo acabou!");
}

