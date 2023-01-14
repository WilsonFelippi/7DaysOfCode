const prompt = require("prompt-sync")({sigint: true });
let nome = prompt('- Qual o seu nome? ');
let idade = prompt('- Quantos anos você tem? ');
let linguagem = prompt('- Qual linguagem de programação você está estudando? ');

console.log('Olá ' + nome + ', você tem '+ idade+' anos e já está aprendendo '+ linguagem+ '!');
