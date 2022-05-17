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
    return array.sort((a,b)=>
     a - b);
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
    const maiorNumero = Math.max(...array01);
    const menorNumero = Math.min(...array01);

    const diferenca = maiorNumero - menorNumero;
    const maiorDivisivelPorMenor = maiorNumero % menorNumero == 0;

    const meuObjeto2 ={
        maiorNumero,
        maiorDivisivelPorMenor,
        diferenca,
    } 
    return meuObjeto2;
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
    if(ladoA == ladoB && ladoB == ladoC){
        return "Equilátero";
    }else if(ladoA == ladoB || ladoA == ladoC || ladoC == ladoB){
        return "Isósceles";
    }else {
        return "Escaleno";
    }
    
}
// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let ordenaArrayOriginal = array.sort((a,b)=>
     a - b);
    const segundoMenor = array[1];
    const segundoMaior = array[array.length-2];

    return novoArray = [segundoMaior, segundoMenor];
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const chamada = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`;

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
    
  for(let pessoa of pessoas){
      if(pessoa.idade <= 14 || pessoa.idade >= 60 || pessoa.altura <= 1.5){
            pessoasNaoAutorizadas.push(pessoa);
      }
  }
return pessoasNaoAutorizadas;
  
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

    for(let i=0; i<contas.length; i++){

        let entradas = [];

        const calculaSaldo = (utilizador) => {
            utilizador[i].compras.forEach(nr => entradas.push(nr* -1));
        }
        calculaSaldo(contas);


        const somaNumeros = (numeros) => {
            return numeros.reduce((sum, nr)=>sum + nr, 0);
        }

        contas[i].compras = [];
        contas[i].saldoTotal += somaNumeros(entradas);

    }
    return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

    const arrayOrdenado = consultas;
        arrayOrdenado.sort(function (a, b) {
	
            return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0);
         
        });
    return arrayOrdenado;
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    const teste = consultas.map((item)=>{
        for(let a of item.dataDaConsulta){
            
            // a = new Date (item.dataDaConsulta)
            // console.log(a);
        }
        
      
    })
    // tentei fazer essa questão, de algumas maneiras, contudo acabei não conseguindo.
}
