import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from './store'
import {getPokemon} from './actions/PokemonActions'

function App() {
  const [pokemonName, setPokemonName] = useState('')
  const pokemonState = useSelector((state: RootStore) => state.pokemon)
  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setPokemonName(e.target.value)
  const handleSubmit = () => dispatch(getPokemon(pokemonName))

  return (
    <div className="App">
      <input onChange={handleChange} type="text" />
      <button onClick={handleSubmit}>Search</button>
      {pokemonState.pokemon && (
        <div>
          <img src={pokemonState.pokemon.sprites.front_default} alt='' />
          {pokemonState.pokemon.abilities.map(ability => {
            return <p key={ability.ability.name}>{ability.ability.name}</p>
          })}
        </div>
      )}
    </div>
  );
}

export default App;
