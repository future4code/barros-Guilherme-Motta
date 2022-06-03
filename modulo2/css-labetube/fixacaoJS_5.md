```
function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

 // Escreva seu código aqui

  let novoArray = [];
  const filtrarArray = animais.map((item) => {
    
    novoArray.push(item.nome);
    console.log(novoArray);
  }) 
  return novoArray;
}
```