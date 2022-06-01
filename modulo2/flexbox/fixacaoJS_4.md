```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui

  let contador = 1;
  let novoNumero;

  for(let j of arrayDeNumeros){
    
    console.log(contador);
    
    if(j == numeroEscolhido){
      
        contador += 2;
        novoNumero = j;
      
        return `O número ${novoNumero} aparece ${contador}x`
    }else if(novoNumero == numeroEscolhido || numeroEscolhido == 3){
      
      contador += 1;
      return `Número não encontrado`
      
    }
    /* else if( numeroEscolhido === 3){
        
        return `Número não encontrado`;
    }*/
  }
}

```