import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {},
    reducers: {
        setPokemon: (state, action) => {
            return action.payload;
        },
    },
    
});

export const { setPokemon } = pokemonSlice.actions;


export const getPokemonUrl = url => dispatch => {
    dispatch(setIsLoading(true));
    return axios
        .get(url)
        .then(res => dispatch(setPokemon(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
};


export default pokemonSlice.reducer;
