/*
    Middleware para obtener la información cada vez que se ejecute una acción

    
*/
export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
}

/*
    Middleware de ejemplo agregando un pokemon personalizado
*/
export const featuring = (store) => (next) => (actionInfo) => {
    //desestructuramos el actionInfo para obtener los pokemones desde la API
    const featured = [{name: 'bubi'}, ...actionInfo.action.payload];
    //modificamos el action, pasando en el payload la lista modificada
    const updatedActionInfo = { ...actionInfo, action: {...actionInfo.action, payload: featured}};
    //mandamos el action al reducer 
    next(updatedActionInfo)
}