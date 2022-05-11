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
    const teste = array.filter((item)=>{
        if(item %2 === 0){
            return item;    
        }
    })

    const parElevado = teste.map((item)=>{
        const potenciacao = Math.pow(item,2);
        return potenciacao;
    })

    return parElevado;
}   

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    const maiorNumero = Math.max(...array);
    return maiorNumero;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const array01 = [num1,num2];
    // const meuObjeto = {};

    const maiorNumero = Math.max(...array01);
    const menorNumero = Math.min(...array01);

    const diferenca = maiorNumero - menorNumero;

    const maiorDivisielPorMenor = maiorNumero % menorNumero ===0;

    meuObjeto["maiorNumero"] = maiorNumero;

    meuObjeto["maiorDivisivelPorMenor"] = maiorDivisielPorMenor;

    meuObjeto["diferença"] = diferenca;
    
    return meuObjeto;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let teste = [];
   for(let i = 0; teste.length < n; i+= 2){
       teste.push(i);
   }
   return teste;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    // if(ladoA !== ladoB && ladoA !== ladoB && ladoB !== ladoC){
    //     return "Escaleno"
    // } else{ 
    //     if(ladoA ===ladoB && ladoA === ladoC && ladoB === ladoC){
    //         return "Equilátero";
    //     } else {
    //         if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
    //             return "Isósceles";
    //         }
    //     }
    // }

    if(ladoA !== ladoB && ladoA !== ladoB && ladoB !== ladoC){
        return "Escaleno";
    }
    else if (ladoA ===ladoB && ladoA === ladoC && ladoB === ladoC){
        return "Equilátero";
    }
    else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
        return "Isósceles";
    }

}   

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    
    const chamada = "Venha assitir ao filme "+ filme.nome + ", de "+ filme.ano + ", dirigido por " + filme.diretor + " e estrelado por " + filme.atores[0] + ", " + filme.atores[1] + ", " + filme.atores[2] + ", " + filme.atores[3];

    console.log(chamada);
    return chamada;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   pessoa["nome"] = "ANÔNIMO";   
   return pessoa;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   let pessoasAutorizadas = [];
    
   const filtraPessoaAutorizadas = pessoas.filter((item)=>{
        
    if(item.idade > 14 && item.idade < 60 && item.altura >= 1.5){
        pessoasAutorizadas.push(item);    
        return pessoasAutorizadas;
    } 
   })
   return filtraPessoaAutorizadas;

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoasNaoAutorizadas = [];
    
  const filtraPessoasNaoAutorizadas = pessoas.filter((item)=>{

    });
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    const mapearArray = contas.map((item)=>{
        const gastos = item.compras;

        for(let i of gastos){
            console.log(i);
            return i;
        }
        
    })
    
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
//    usar o metodo splite
}