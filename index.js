const { homens, mulheres } = require('./clientes.js');
const { trocaLugar } = require('./trocaLugar.js');


function selectionSort(array){
    let n = array.length;

    for(let i = 0; i < n; i++){
        let atual = i;
        let anterior = i - 1;

        if(i = 0 && array[atual].idade < array[anterior].idade){
            trocaLugar(array, atual, anterior);
            i--;
        }
    }

    return array;
}

console.log(selectionSort(homens));
