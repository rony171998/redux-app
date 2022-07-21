import { configureStore } from '@reduxjs/toolkit'
import user from "./slice/user.slice";
import pokemon from "./slice/pokemon.slice";
import idPokemon from "./slice/idPokemon.slice";
import pokemons from "./slice/pokemons.slice";
import isLoading from "./slice/isLoading.slice";
export default configureStore({
  reducer: {
    user,
    pokemon,
    idPokemon,
    pokemons,
    isLoading
	}
});