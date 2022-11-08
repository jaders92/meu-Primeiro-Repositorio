/* 'Boolean' true e false serve para mostrar informação verdaira ou falsa (binario)
ex:  const camisetaRenanAzul = true;
     const camisetalemaoAzul = false;

     ou uma "condicional" é quando tentamos ver se uma situação é verdadeira ou falsa, ex:
     10 é maior quue 5 (10>5) isso é verdadeiro.
     10 é menor que 5 (10<5) isso é falso.
     nas condicionais podemos usar atribuições como :
     === igual
     > maior
     < menor
     >= maior ou igual
     <= menor ou igual
     % ultiliza o resto da divisão, bom para descobrir que numeros são multiplos de outros
     */
     

     /*teste:
      
     const numero = 15;
     const numeroPar = (numero % 5) === 0;

     console.log(numeroPar);

     /*operador de condicional que servem para imprimir um texto casoo o resultado seja verdadeiro ou seja falso, "if" (se)  ex:
     
     if(numeroPar) {
       
       console.log('Par')
     }

     /*se eu quiser que ele negue em texto que ele não é verdadeiro, ou como no exemplo não é par como ! na frente da variavel. ex: 
     if(!numeroPar) {
       
          console.log('Impar')
        }*/
      // é possivel usar tambem o operador "else" (se não) ex:

      /*if(numeroPar) {
       
          console.log('Par')
        } else {
          console.log('Impar')
        }*/

//teste 2
     const numero = 0;
     const numeroDivisivelPor5 = (numero % 5) === 0;

     console.log(numeroDivisivelPor5);
      
    /* if(numeroDivisivelPor5) {
       
          console.log('Sim')
        } else {
          console.log('Nao')
        }

// condição especial colocar um novo "if" e else seguido de if ex:*/

if (numero === 0){
     console.log('O numero é inválido')
} else if(numeroDivisivelPor5) {
       
     console.log('Sim')
   } else {
     console.log('Nao')
   }

