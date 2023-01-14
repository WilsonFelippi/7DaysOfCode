const prompt = require("prompt-sync")({sigint: true });
console.log('Um numero aleatorio de 1 a 10 foi escolhido.');
let resp = prompt('Qual é esse numero? ');
let numAleatorio = Math.floor(Math.random() *(10 - 0+1)+0);
let repetir = ' '
do{
    for(let i = 1; numAleatorio != resp && i < 3; i++){
        resp = prompt('Tente novamente, vc tem mais '+ (3-i) +' tentativa. ');
    }
    if(resp == numAleatorio){
        console.log('Parabéns, você acertou!');
        erros = 2
    } else {
        console.log('Que pena, boa sorte na proxima vez.');
        erros = 2
    }
    repetir = prompt('Você quer tentar novamente? S/N ')
} while(repetir == 'S')