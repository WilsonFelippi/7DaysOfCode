const prompt = require("prompt-sync")({sigint: true });

let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let escolha = ' ';
let item = ' ';
let lista = ' ';
let remover = ' ';

do{
    console.log(`Deseja:\n1 - Adicionar um item a lista;\n2 - Remover um item da lista;\n3 - Encerrar; `)
    escolha = prompt('');
    if(escolha === '1'){
        do{
            item = prompt('Qual item deseja adicionar à sua lista de compras? ');
            console.log(`Em qual lista deseja adicionar esse item?\n1 - Frutas\n2 - Laticínios\n3 - Congelados\n4 - Doces `);
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
    }else if(escolha === '2'){
        do{
            remover = prompt(`Digite o item que deseja remover: `);
            if(frutas.includes(remover)){
                frutas.splice(frutas.indexOf(remover),1);
                console.log('Frutas: '+frutas);
            } else if (laticinios.includes(remover)){
                laticinios.splice(laticinios.indexOf(remover),1);
                console.log('Laticínios: '+laticinios);
            } else if (congelados.includes(remover)){
                congelados.splice(congelados.indexOf(remover),1);
                console.log('Congelados: '+congelados);
            } else if (doces.includes(remover)){
                doces.splice(doces.indexOf(doces),1);
                console.log('Doces: '+doces);
            } else {
                console.log('Entrada inválida. ');
            }
            remover = prompt('Deseja remover mais algum item? sim/nao ');
        }while(remover != 'nao');
    } else {
        console.log('Escolha inválida, tente novamente.');
    }
}while(escolha != '3');
console.log(
    `Lista de compras:
    Frutas: ${frutas}
    Laticínios: ${laticinios}
    Congelados: ${congelados}
    Doces: ${doces}`);