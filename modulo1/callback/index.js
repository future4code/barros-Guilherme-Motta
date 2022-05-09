//--------------EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO----------------

/* 1)  será impresso todos os objetos que estão dentro do array original em um novo array.

2) Eu acho que criará 3 array dentro de um array, onde cada terá um objeto diferente dentro dele    

3) Irá filtrar entre os objetos, e retornará todo objeto que possui apelido diferente de CHIJO com o seus respectivos indices.*/ 

// ------------EXERCÍICOS DE ESCRITA DE CÓDIGO-------------------------


// 1)
// A =>
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]
const novoArrayA = pets.map((item,index)=>{
    return item.nome ;
})
console.log(novoArrayA);


// B =>

const novoArrayB = pets.filter((item)=>{
    return item.raca === "Salsicha";
})
console.log(novoArrayB);


// c =>

const novoArrayC = pets.filter((item) => {
    if(item.raca === "Poodle"){
        console.log("Você ganhou 10% de desconto para "+ item.nome);
    }
})


//----- 2)

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//  A =>
const subArray1 = produtos.map((item)=> {
    return item.nome;
})
console.log(subArray1);


// B =>
const subArray2 = produtos.map((item,index,Array)=> {
    let desconto = item.preco * 0.05;    
    let novoPreco = item.preco - desconto;

    console.log(`nome: ${item.nome}, preço: ${novoPreco}`);    
})


// C =>
const subArray3 = produtos.filter((item,index,array)=>{
    return item.categoria === "Bebidas";
})
console.log(subArray3);


// D =>

const arraySoDeYpe = produtos.filter((item)=>{
    return item.nome.includes("Ypê");
});
console.log(arraySoDeYpe);


// E =>
const arrayDeFrase = produtos.filter((item)=>{
    if(item.nome.includes("Ypê")){
        console.log(`Compre o ${item.nome} por ${item.preco}`);
    }
})


//---------------------DESAFIOS---------------------------------------


// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
// ]

// // A =>

// const arrayEmOrdem = pokemons.filter((item, index, array)=>{
//     let teste = item.nome;
//     console.log(teste);

//     let teste2 = " ";

    
// })
// console.log(arrayEmOrdem);

// B =>















