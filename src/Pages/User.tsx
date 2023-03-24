import React from "react";
import AccTransaction from "../components/AccTransaction/AccTransaction";
import EditUser from "../components/EditUser/EditUser";
import { fetchUser } from "../utils/fetchApi";
import { useSelector, useDispatch } from 'react-redux';
import { logout, updateUser } from '../redux/userSlice';
import type { rootState } from '../redux/store';
import { Navigate } from "react-router-dom";
/**
 * 
 * @returns A Page User which fetch profile and load HTML Elements + Components 
 */
export default function User(): JSX.Element {

	const dispatch = useDispatch();
	const token: string = useSelector((state: rootState) => state.user.token);


	const atLoad = async () => {

		const answer = await fetchUser(token);
		console.log(answer);
		if (typeof answer === 'number') {
			dispatch(logout());

		}
		else {
			dispatch(updateUser(answer));
		}



	};

	atLoad();


	return (
		<main className="bg-dark">
			<h2 className="sr-only">Accounts</h2>
			<EditUser />
			<AccTransaction title={"Argent Bank Checking (x8349)"} amount={"2,082.79"} />
			<AccTransaction title={"Argent Bank Savings (x6712)"} amount={"10,928.42"} />
			<AccTransaction title={"Argent Bank Credit Card (x8349)"} amount={"184.30"} />
		</main>
	);

}

