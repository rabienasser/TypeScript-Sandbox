import axios from 'axios'
import {Dispatch} from 'redux'
import { POKEMON_ERROR, POKEMON_LOADING, POKEMON_SUCCESS, PokemonDispatchTypes } from './PokemonActionTypes'

export const getPokemon = (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
    try {
        dispatch({ type: POKEMON_LOADING })

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

        dispatch({
            type: POKEMON_SUCCESS,
            payload: res.data
        })
    } catch(err) {
        dispatch({ type: POKEMON_ERROR })
    }
}

 