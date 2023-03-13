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

		updateUser: (state: any, action: PayloadAction<any>) => {
			const userObject: userState = action.payload;
			
			state.email = userObject.email ?? state.email;
			state.firstName = userObject.firstName ?? state.firstName;
			state.lastName = userObject.lastName ?? state.lastName;
			state.createdAt = userObject.createdAt ?? state.createdAt;
			state.updatedAt = userObject.updatedAt ?? state.updatedAt;
		},

		setRemember: (state: any, action: PayloadAction<boolean>) => {
			state.remember = action.payload;
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
export const { clearToken, setToken, setRemember, updateUser } = userSlice.actions;

export default userSlice.reducer;