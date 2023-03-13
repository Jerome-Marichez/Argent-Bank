import React from "react";
import "./EditUser.scss";
import { useSelector, useDispatch } from 'react-redux';
import type { rootState } from '../../redux/store';
/**
 * 
 * @returns A component who display fullName of our user and allow edit his itself
 */
export default function EditUser(): JSX.Element {
	const fullName: string = useSelector((state: rootState) => state.user.firstName + " " + state.user.lastName);

	return (
		<div className="header">
			<h1>Welcome back<br />{fullName}</h1>
			<input></input>
			<button className="edit-button">Edit Name</button>
		</div>
	);
}