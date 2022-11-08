/*Faça um programa para calcular o valor gasto de combustivel de uma viagem.
Você terá três variaveis. Sendo elas:
 1 - preço do combustivel;
 2 - Gasto médio de combustivel do carro por km;
 3 - Distância em km da viagem;

 Imprima no console o valor que será para realizar esta viagem.*/

 console.log('Olá, esse é o seu programa de calculos de viagens');

 const vlCombustivel = 4.89;
 const KmPorLitros = 12; 
 const distanciaKm = 700;
 const pedagio = 40;
 
 const litrosConsumidos = distanciaKm / KmPorLitros;
 
 const gastoEmReal = litrosConsumidos * vlCombustivel
 const gastoTotal = pedagio + gastoEmReal
 
 console.log('Combustivel Total gasto na Viagem:' + ' ' + litrosConsumidos.toFixed(2) + ' ' + 'Litros');
 console.log('Valor Total da Viagem: R$' + ' ' + gastoEmReal.toFixed(2));
 console.log ('Gasto Total da Viagem' + ' ' + gastoTotal.toFixed(2))