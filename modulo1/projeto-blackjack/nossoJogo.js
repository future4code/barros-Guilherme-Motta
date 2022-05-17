console.log("Boas Vindas ao jogo de BlackJack");

if(confirm("Você quer iniciar uma nova rodada? ")== true){
   console.log("Bora começar a rodada");

function cartasDoUsuario (){
   const carta1 = comprarCarta();
   const carta2 = comprarCarta();
   console.log(`A primeira carta sorteada para o usuário foi: ${carta1.texto}, essa carta vale ${carta1.valor} pontos`);

   console.log("A segunda carta sorteada para o usuário foi: "+ carta2["texto"]+ ", essa carta vale "+ carta2["valor"]+ " pontos");

   const somaPontos = carta1.valor + carta2["valor"];
   
   console.log("Usuário - cartas: "+ carta1["texto"]+ " " + carta2["texto"]+ " -  pontução: "+ somaPontos + " pontos");

    return array = [carta1.texto, carta2.texto, somaPontos];
}

const cartasDoPc = function(){
   const carta1 = comprarCarta();
   const carta2 = comprarCarta();

   console.log("A primeira carta sorteada para o computador foi: "+ carta1.texto+ ", essa carta vale "+ carta1["valor"]+ " pontos");
   
   console.log(`A segunda carta sorteada para o computador foi: ${carta2.texto}, essa carta vale ${carta2["valor"]} pontos`);

   const somaPontos = carta1.valor + carta2["valor"];
   

   console.log(`Computador - cartas: ${carta1.texto}  ${carta2.texto} - pontuação: ${somaPontos} pontos`);

   return array2 = [carta1.texto, carta2.texto, somaPontos];
}

const combinacaoUsuario = cartasDoUsuario();
const combinacaoPc = cartasDoPc();


const resultadoDoUsuario = combinacaoUsuario[array.length-1];
const resultadoDoPc = combinacaoPc[array.length-1];
   
if(resultadoDoUsuario == resultadoDoPc){
   console.log("Empate!");
}
else if (resultadoDoUsuario > resultadoDoPc){
   console.log("O usuário ganhou!");
}
else if (resultadoDoUsuario < resultadoDoPc){
   console.log("O computador ganhou!");
}
   }
else{
   console.log("O jogo acabou!");
}







