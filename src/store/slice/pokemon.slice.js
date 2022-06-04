import { createSlice } from "@reduxjs/toolkit";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: null,
  reducers: {
    changePokemon: (state, action) =>{
      return action.payload
    } 
  }
});

export const { changePokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;