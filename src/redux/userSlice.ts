import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './initialStates'

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		increment: (state: any) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			
			state.value += 1
		},
		decrement: (state : any) => {
			state.value -= 1
		},
		incrementByAmount: (state: any, action: PayloadAction<number>) => {
			state.value += action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer