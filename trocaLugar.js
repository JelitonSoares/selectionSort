const { homens } = require('./clientes.js');

function trocaLugar(array, i1, i2){
    let primeiroItem = array[i1];
    let segundoItem = array[i2];
    array[i1] = segundoItem;
    array[i2] = primeiroItem;

    return array;
}

console.log(trocaLugar(homens, 2, 0));

module.exports = { trocaLugar };