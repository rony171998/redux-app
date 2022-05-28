import { createSlice } from "@reduxjs/toolkit";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: "",
  reducers: {
    changePokemon: (state, action) => action.payload
  }
});

export const { changePokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;