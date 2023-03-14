import React from "react";
import AccTransaction from "../components/AccTransaction/AccTransaction";
import EditUser from "../components/EditUser/EditUser";

import { useSelector, useDispatch } from 'react-redux';
import { logout, updateUser } from '../redux/userSlice';
import type { rootState } from '../redux/store';
/**
 * 
 * @returns A Page User which fetch profile and load HTML Elements + Components 
 */
export default function User(): JSX.Element {

	const dispatch = useDispatch();
	const token: string = useSelector((state: rootState) => state.user.token);

	const apiPath: string = process.env.REACT_APP_PROFILE_POST_API_URL ?? "http://localhost:3001/v1/api/user/profile";


	const fetchUser = async (): Promise<object | false> => {
		try {
			const response: Response = await fetch(apiPath, {
				headers: {
					'Accept': 'application/json',
					'Authorization': `Bearer ${token}`,
				},
				method: "POST",
			});

			const responseUser: { status: number, body: object } = await response.json();
			if (responseUser.status !== 200 && !responseUser.body) { return false; }

			const userObject: object = responseUser.body;
			return userObject;
		}
		catch {
			return false;
		}
	};

	fetchUser().then((userObject: false | object) => {
		console.log("fetch"); 
		if (userObject === false) { dispatch(logout()); }
		dispatch(updateUser(userObject));
	});
	fetchUser().catch(() => { dispatch(logout()); });


	return (
		<main className="main bg-dark">
			<h2 className="sr-only">Accounts</h2>
			<EditUser />
			<AccTransaction title={"Argent Bank Checking (x8349)"} amount={"2,082.79"} />
			<AccTransaction title={"Argent Bank Savings (x6712)"} amount={"10,928.42"} />
			<AccTransaction title={"Argent Bank Credit Card (x8349)"} amount={"184.30"} />
		</main>
	);

}

