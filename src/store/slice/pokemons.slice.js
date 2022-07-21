import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";

export const pokemonsSlice = createSlice({
    name: "pokemons",
    initialState: [],
    reducers: {
        setPokemons: (state, action) => {
            return action.payload;
        },
    },
    
});

export const { setPokemons } = pokemonsSlice.actions;

export const getPokemons = (limit,offset) => dispatch => {
    dispatch(setIsLoading(true));
    return axios
        .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
        .then(res => dispatch(setPokemons(res.data.results)))
        .finally(() => dispatch(setIsLoading(false)));
};

export const getPokemonsType = type => dispatch => {
    dispatch(setIsLoading(true));
    return axios
        .get(`https://pokeapi.co/api/v2/type/${type}?offset=0&limit=8`)
        .then(res => dispatch(setPokemons(res.data.pokemon)))     
        .finally(() => dispatch(setIsLoading(false)));
        
};


export default pokemonsSlice.reducer;
