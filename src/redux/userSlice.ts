import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialStates';

export const userSlice = createSlice({
	name: 'token',
	initialState,
	reducers: {
		// Redux Toolkit allows us to write "mutating" logic in reducers. It
		// doesn't actually mutate the state because it uses the Immer library,
		// which detects changes to a "draft state" and produces a brand new
		// immutable state based off those changes

		setRemember: (state: any, action: PayloadAction<boolean>) => {
			state.remember = !action.payload; 
		},
		clearToken: (state: any) => {
			state.token = "";
		},
		setToken: (state: any, action: PayloadAction<string>) => {
			state.token += action.payload;
		},
	},
});



// Action creators are generated for each case reducer function
export const { clearToken, setToken, setRemember } = userSlice.actions;

export default userSlice.reducer;