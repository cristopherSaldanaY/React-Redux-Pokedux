import axios from "axios";

//obtener la lista de pokemones
export const getPokemon = () => {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((resp) => resp.data.results)
    .catch((err) => console.log(err));
};

//obtener el detalle de los pokemones
export const getPokemonDetails = (pokemon) => {
  return axios
    .get(pokemon.url)
    .then((resp) => resp.data)
    .catch((err) => console.log(err));
};
