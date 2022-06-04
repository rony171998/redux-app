import { configureStore } from '@reduxjs/toolkit'
import user from "./slice/user.slice";
import pokemon from "./slice/pokemon.slice"
export default configureStore({
  reducer: {
    user,
    pokemon
	}
});