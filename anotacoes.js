/* como declarar função: 
function nomedafunçao(){
    console.log();
}
Exemplo:*/

function sayMyName(name){
    console.log('Your name is:' + name);
}

sayMyName('Jade');
sayMyName('Ramos');

/* exemplo 2*/ 

function quadrado(valor){
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);
const quadradoDeCem = quadrado(100);
console.log(quadradoDeCem);

/*pode tambem:*/

console.log( quadrado(10) + quadrado(10));

/*pode tambem: (lembrar exercicio do juros)*/

function incrementarJuros( valor, percentualJuros){
    const valorDeAcrecimo = (percentualJuros/100) * valor;
    return valor + valorDeAcrecimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));

/* vamos organizar nossos codigos com:
function main() {
    console.log('Programa Principal');
    (ir colocando funcoes que forem necessarias, por exemplo:
        calcularJuros();
        )
}

function calcularJuros(){

}*/

