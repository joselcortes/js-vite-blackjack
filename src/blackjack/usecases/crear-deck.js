
import _ from 'underscore';
/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposCarta ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales ejemplo: ['A','J','Q','K']
 * @returns  {Array<String>}regresa un nuevo deck de cartas
 */
// Esta función crea un nuevo deck
//Agregar export se utiliza para exportar de forma independiente
//export const crearDeck = (tiposCarta, tiposEspeaciales)
export const crearDeck = (tiposCarta, tiposEspeciales) => {
    
    if(!tiposCarta || tiposCarta.length === 0) 
        throw new Error('tiposcarta es obligatorio como un arreglo de string');
    
    if(!tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string');
    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}


//Exportar por defecto
// export default crearDeck;