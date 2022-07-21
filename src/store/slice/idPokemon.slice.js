import { createSlice } from "@reduxjs/toolkit";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const idPokemonSlice = createSlice({
    name: "idPokemon",
    initialState: null,
    reducers: {
        changePokemon: (state, action) => {
            return action.payload;
        }   
    }   
});

export const { changePokemon } = idPokemonSlice.actions;

export default idPokemonSlice.reducer;
