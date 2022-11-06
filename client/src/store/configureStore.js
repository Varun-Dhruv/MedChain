import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import blockchainReducer from "./reducers/blockchain";

export const store = configureStore({
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),

	reducer: {
		auth: authReducer,
		blockchain: blockchainReducer,
	},
});