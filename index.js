const { homens,mulheres } = require('./clientes.js');
const { trocaLugar } = require('./trocaLugar.js');


function selectionSort(array){
    let n = array.length;

    for(let i = 0; i < n; i++){
        // let atual = array[i];
        // let anterior = array [i - 1];

        while(i > 0 && array[i].idade < array[i - 1].idade){
            trocaLugar(array, i, i- 1);
            i--;
        }
    }

    return array;
}

console.log(selectionSort(mulheres));
