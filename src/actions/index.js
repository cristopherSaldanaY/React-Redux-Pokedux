import { getPokemonDetails } from "../api";
import { SET_LOADING, SET_POKEMONS, SET_FAVORITE } from "./types";

//action creator
export const setPokemons = (payload) => ({ type: SET_POKEMONS, payload });
export const setLoading = (payload) => ({ type: SET_LOADING, payload });
export const setFavorite = (payload) => ({ type: SET_FAVORITE, payload });

//funcion para obtener el detalle de pokemon usando asincronismo con redux-thunk
export const getPokemonWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const pokemonsDetailed = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonsDetailed));
  };
