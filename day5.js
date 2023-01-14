const prompt = require("prompt-sync")({sigint: true });

let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let item = ' ';
let lista = ' ';

do{
    item = prompt('Qual item deseja adicionar à sua lista de compras? ');
    console.log(
        `Em qual lista deseja adicionar esse item?
        1 - Frutas
        2 - Laticínios
        3 - Congelados
        4 - Doces `);
    lista = prompt('');
    if(lista == '1'){
        frutas.push(item);
    } else if (lista == '2'){
        laticinios.push(item);
    } else if (lista == '3'){
        congelados.push(item);
    } else if (lista == '4'){
        doces.push(item);
    } else {
        lista = prompt('Lista inválida');
    }

    item = prompt('Deseja adicionar mais algum item? sim/nao ');
} while(item != 'nao');

console.log(
    `Lista de compras:
    Frutas: ${frutas}
    Laticínios: ${laticinios}
    Congelados: ${congelados}
    Doces: ${doces}`);