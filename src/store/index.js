import { configureStore } from '@reduxjs/toolkit'
import user from "./slice/user.slice";
export default configureStore({
  reducer: {
    user
	}
});