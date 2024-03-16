import { configureStore } from "@reduxjs/toolkit";
import stopsReducer from "./features/stops/stopsSlice";
export const store = configureStore({
	reducer: {
		stops: stopsReducer,
	},
});
