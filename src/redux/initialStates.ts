export interface userState {
	token: string,
	email: string,
	remember: boolean, 
	firstName: string,
	lastName: string,
	createdAt: string,
	updatedAt: string,
}

export const initialState: userState = {
	token: "",
	email: "",
	remember: false,
	firstName: "",
	lastName: "",
	createdAt: "",
	updatedAt: "",
};