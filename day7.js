const prompt = require("prompt-sync")({sigint: true });

let num1 = 0;
let num2 = 0;
let opcao = '';

function soma(x,y){
    return x+y;
}
function subt(x,y){
    return x-y;
}
function mult(x,y){
    return x*y;
}
function divs(x,y){
    return x/y;
}

do{
    console.log('Selecione a operação desejada:\n1 - Soma;\n2 - Subtração;\n3 - Multiplicação\n4 - Divisão;\n5 - Encerrar.');
    opcao = prompt('');

    if(opcao === '1'){
        num1 = parseInt(prompt('Digite o primeiro numero: '));
        num2 = parseInt(prompt('Digite o segundo numero: '));
        console.log('A soma de '+num1+' e '+num2+ ' é: '+soma(num1,num2));
    } else if (opcao === '2'){
        num1 = parseInt(prompt('Digite o primeiro numero: '));
        num2 = parseInt(prompt('Digite o segundo numero: '));
        console.log('A subtração de '+num1+' por '+num2+ ' é: '+subt(num1,num2));
    } else if (opcao === '3'){
        num1 = parseInt(prompt('Digite o primeiro numero: '));
        num2 = parseInt(prompt('Digite o segundo numero: '));
        console.log('A multiplicação de '+num1+' por '+num2+ ' é: '+mult(num1,num2));
    } else if (opcao === '4'){
        num1 = parseInt(prompt('Digite o primeiro numero: '));
        num2 = parseInt(prompt('Digite o segundo numero: '));
        console.log('A divisão de '+num1+' por '+num2+ ' é: '+divs(num1,num2));
    } else {
        if(opcao !== '5'){
            console.log('Entrada inválida, tente novamente. ')
        }
    }
}while(opcao !== '5');

console.log('Obrigado por usar a calculadora! Até mais!')