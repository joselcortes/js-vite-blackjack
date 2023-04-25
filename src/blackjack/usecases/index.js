//Esto permite exportar de forma independiente pero para que no haya errores
//primero se debe agregar export en la funcion antes de hacerlo
export {crearDeck} from './crear-deck';
//Al importarlo podemos asignarle un nuevo nombre para utilizarlo en este archivo
//import {crearDeck as crearNuevoDeck} from './usecases/crear-deck';
//import crearDeck from './usecases/crear-deck';
//La exportacion por defecto se le puede asignar un nombre a eleccion
export {pedirCarta} from './pedir-carta';
export { valorCarta } from './valor-carta';
export { turnoComputadora } from './turno-computadora';
export { crearcartahtml } from './crear-carta-html';