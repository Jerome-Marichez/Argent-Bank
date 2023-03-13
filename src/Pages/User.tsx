import React from "react";
import AccTransaction from "../components/AccTransaction/AccTransaction";
import EditUser from "../components/EditUser/EditUser";

/**
 * 
 * @returns A Page User which wrap HTML Elements + Components 
 */
export default function User(): JSX.Element {

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