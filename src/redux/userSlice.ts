import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialStates';
import { userState } from './initialStates';

export const userSlice = createSlice({
	name: 'token',
	initialState,
	reducers: {
		// Redux Toolkit allows us to write "mutating" logic in reducers. It
		// doesn't actually mutate the state because it uses the Immer library,
		// which detects changes to a "draft state" and produces a brand new
		// immutable state based off those changes


		// When calling the updateUser, we pass an object containing the updated properties that we want to apply.
		updateUser: (state: userState, action: PayloadAction<any>) => {
			const userObject: userState = action.payload;

			
			state.email = userObject.email ?? state.email;
			state.firstName = userObject.firstName ?? state.firstName;
			state.lastName = userObject.lastName ?? state.lastName;
		},

		// Clear all states expect Email & Remember
		logout: (state: any) => {
			state.token = ""; 
			state.firstName = ""; 
			state.lastName = "";
		},

		setRemember: (state: userState, action: PayloadAction<boolean>) => {
			state.remember = action.payload;
		},

		setToken: (state: userState, action: PayloadAction<string>) => {
			state.token += action.payload;
		},
	},
});



// Action creators are generated for each case reducer function
export const { logout, setToken, setRemember, updateUser } = userSlice.actions;

export default userSlice.reducer;