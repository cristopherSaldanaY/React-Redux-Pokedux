import { useEffect, useState } from "react";
import { Col } from "antd";

import {SearchPokemon} from './components/SearchPokemon/SearchPokemon';
import {PokemonList} from './components/PokemonList/PokemonList';
import logo from './static/logo.svg'

import { getPokemon } from './api';
import "./App.css";


function App() {

  //manejar un estado que inicial sera un objeto vacio
  const [pokemons, setPokemons ] = useState([]);

  //hook para el uso de la api
  useEffect( () => {
    const fetchPokemons = async () => {
      //cuando tengamos la respuesta la guardaremos
      const pokemonResp = await getPokemon();
      setPokemons(pokemonResp);
    };

    fetchPokemons();
  }, []);

  //despues de tener la lista, la pasamos al componente
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <SearchPokemon />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
