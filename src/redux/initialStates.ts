export interface userState {
	value: number,
	token: string,
	id: string,
	email: string,
	firstName: string,
	lastName: string,
	createdAt: string,
	updatedAt: string,
}

export const initialState: userState = {
	value: 0,
	token: "",
	id: "",
	email: "",
	firstName: "",
	lastName: "",
	createdAt: "",
	updatedAt: "",
};