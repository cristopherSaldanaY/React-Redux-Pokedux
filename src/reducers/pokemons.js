import { SET_LOADING, SET_POKEMONS, SET_FAVORITE } from "../actions/types";

//creamos el estado inicial que se recomienda llave valor y sera pokemons vacio
const initialState = {
  pokemons: [],
  loading: false,
};

/* 
- la funcion pura para el reducer, que recibe el estado actual y el action (cambio a realizar)
- con switch evaluamos casa caso, y evaluaremos el action.type
- el case SET_POKEMONS retornamos el nuevo estado utilizando inmutabilidad, copiando lo que teniamos
  en el estado actual  (...state) y remplazar la propiedad pokemons por el action.payload

- case default retornamos el estado actual, cuando no conocemos el action type
*/
export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case SET_FAVORITE:
      //hacemos la copia
      const newPokemonList = [...state.pokemons];

      //buscamos el index
      const currentPokemonIndex = newPokemonList.findIndex( (pokemon) => {
        return pokemon.id === action.payload.pokemonId
      });

      //validar
      if (currentPokemonIndex < 0){
        return state;
      }

      //cambiar el valor de favorite
      newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite;

      //retornar la  lista modificada
      return { ...state, pokemons: newPokemonList}

    case SET_LOADING:
      return { ...state, loading: action.payload }
    default:
      return state;
  }
};


