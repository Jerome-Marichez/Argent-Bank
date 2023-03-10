import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export const store = configureStore({
	reducer: {
		user: userReducer,
	},
	preloadedState: loadFromLocalStorage()
});

function saveToLocalStorage(state: any) {

	try {
		const serialState = JSON.stringify(state);
		localStorage.setItem("reduxStore", serialState);
	} catch (e) {
		console.warn(e);
	}
}

function loadFromLocalStorage() {

	try {
		const serialisedState = localStorage.getItem("reduxStore");
		if (serialisedState === null) return undefined;
		return JSON.parse(serialisedState);
	} catch (e) {
		console.warn(e);
		return undefined;
	}
}
store.subscribe(() => saveToLocalStorage(store.getState()));

export type rootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch