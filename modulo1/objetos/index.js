//--------exercícios de interpretação de código-----------


/* 1)

1º console => irá mostrar o primeiro integrante do elenco do filme, sendo ele Mathesu Nachtergaele.
2º console => Irá impimir o ultimo integrante do elenco do filme, sendo ele a Virginia Cavendish.

3º console => Irá mostrar a data de exibição do filme em alguns canais, contudo o resultado que será imprimido será : canal : "Globo", horario: 14h.*/


/* 2)
A =>
1º console => Mostrará os dados do cachorro, seu nome,idade e raça.

2º console => Irá pegar os mesmo dados que foram inseridos para o cachorro, entretonto seraá alterado somente o valor de uma propriedade,sendo ele o nome, juca será transformado em juba. */

/*3º console => imprimirá o valores colocados para o objeto GATO, contudo, novamente terá a troca do nome do animalzinho, o nome do gato é JUBA. O nome do GATO será impresso com uma alteração, a letra A será trocada pela letra O, a tartaruga  terá o nome igual a JUBO.*/
/*B=> 

Os três pontos servem para copiar completamente um objeto e isso é muito interessante, pois permite colocar um objeto inteiro dentro de outro e ainda posso alterar os valores que eu quizer.*/

//-----exercícios de escrita de código-----------

// 1)

let pessoa = {
    nome:"Guilherme",
    apelidos:["gui", "guigui", "Guiga"],
}

function obj (pessoa){
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`);
}
obj(pessoa);

const pessoa2 = {
    ...pessoa,
    apelidos:["guizinho","guilhermito","guilherminho"]
}
obj(pessoa2);


// 2)

function verificao(cidadao1,cidadao2){
    cidadao1 ={
        nome:"ana clara",
        idade: 20,
        profissao: "estudante"
    }
    cidadao2 ={
        ...cidadao1,
        nome: "Neuza",
        idade: 67,
        profissao: "faxineira"
    }
    array1 = [cidadao1.nome,cidadao1.nome.length, cidadao1.idade, cidadao1.profissao, cidadao1.profissao.length];
    console.log(array1);

    array2 = [cidadao2.nome,cidadao2.nome.length, cidadao2.idade, cidadao2.profissao, cidadao2.profissao.length];
    console.log(array2);
}
verificao();

// 3)

var carrinho = [ ];

let fruta1 = {
    nome:"uva",
    disponibilidade: 1 > 0
};

let fruta2={
    nome:"kiwi",
    disponibilidade: 1 > 0
};

let fruta3={
    nome:"caqui",
    disponibilidade: 1 > 0
};

// carrinho.push(fruta1);
// carrinho.push(fruta2);
// carrinho.push(fruta3);

function colocaCarrinho(){

    console.log(carrinho);
}
colocaCarrinho(carrinho.push(fruta1, fruta2, fruta3));

// colocaCarrinho(carrinho.push(fruta1));
// colocaCarrinho(carrinho.push(fruta2));
// colocaCarrinho(carrinho.push(fruta3));


//-----------------------DESAFIOS-----------------------------


// 1)
function ConstruirObj(){
    this.nome = prompt("Digite o seu nome:");
    this.idade = Number(prompt("Digit a sua idade: "));
    this.profissao = prompt("Digite a sua profissão: ");
}

var resultadoDaConstrucao = new ConstruirObj();
console.log(resultadoDaConstrucao);


// 2)

function filme1(nome, anoLancamento){
    return {nome:"Interestelar", anoLancamento:2014};
}
function filme2(nome,anoLancamento){
    return {nome:"Irmão Urso", anoLancamento: 2003};
}
let resultado01 = filme1();
console.log(resultado01);

let resultado02 = filme2();
console.log(resultado02);


















