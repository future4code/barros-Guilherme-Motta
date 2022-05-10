// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()



// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;
}



// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a,b)=> a - b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    
    const filtrar = array.filter((item)=>{
        let novoArray = [];
        if(item % 2 === 0){    
            return novoArray.push(item);
        }
    })
    return filtrar;
}   

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const filtrarArray = array.filter((item)=>{
        let novoArray =[];
        if(item %2 ===0){
            console.log(item);
            
            
        }
    })
    return filtrarArray;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = Math.max(...array);
    console.log(maiorNumero);
    return maiorNumero;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let teste = [];
   for(let i = 0; teste.length < n; i+= 2){
       teste.push(i);
       console.log(teste);
   }
   return teste;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    
    const chamada = "Venha assitir ao filme "+ filme.nome + ", de "+ filme.ano + ", dirigido por " + filme.diretor + " e estrelado por " + filme.atores[0] + ", " + filme.atores[1] + ", " + filme.atores[2] + ", " + filme.atores[3];

    return chamada;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}