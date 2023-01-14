const prompt = require("prompt-sync")({sigint: true });
let resp = 0;
let linguagem = ' ';
let linguagemlista = [];

resp = prompt('Escolha \n1 - Front-End \n 2 - Back-End\n 3 - Digitar sua linguagem \n 4 - Sair ');
if(resp == 1){
    let resp = prompt('Você quer aprender: \n1 - React\n 2 - Vue ');
    if (resp == 1){
        linguagem = 'React';
    } else if (resp == 2){
        linguagem = 'Vue';
    } else {
        console.log('Resposta invalida.')
    }
} 
if(resp == 2){
    let resp = prompt('Você quer aprender:\n1 - C#\n 2 - Java? ');
    if (resp == 1){
        linguagem = 'C#';
    } else if (resp == 2){
        linguagem = 'Java';
    } else {
        console.log('Resposta inválida')
    }
}
if (resp == 3){
    while(linguagemlista != 1){
        linguagemlista.append = prompt('Digite sua linguagem ou digite 1 para sair: ');
    }
}

console.log("Você quer aprender " + linguagem + " continue se esforçando!");