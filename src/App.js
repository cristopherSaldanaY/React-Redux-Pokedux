import { useEffect, useState } from "react";
import { Col } from "antd";
import { connect } from "react-redux";

import {SearchPokemon} from './components/SearchPokemon/SearchPokemon';
import {PokemonList} from './components/PokemonList/PokemonList';
import logo from './static/logo.svg'

import { getPokemon } from './api';
import { setPokemons as setPokemonsActions} from './actions';
import "./App.css";


function App({pokemons, setPokemons}) {
  console.log(pokemons);

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

/*
recibe el state y retorna un objeto cuyas propiedades van a ser enviadas a las props 
de los componentes que se estan conectando a redux
*/
const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

/* 
función que recibirá el dispatcher  y  retornara un objeto que será mapeado a las
propiedades con los action creator ya establecidos.
*/
const mapDispatchToProps = (dispatch) =>({
  setPokemons: (value) => dispatch(setPokemonsActions(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
