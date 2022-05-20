```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
  salarioBase = 2000;
  const soma = salarioBase + (qtdeCarrosVendidos * 100) + (valorTotalVendas * 0.05);
  console.log(soma);
  return soma;
}
```