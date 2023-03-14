import React from "react";
import "./EditUser.scss";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../redux/userSlice';
import type { rootState } from '../../redux/store';
/**
 * 
 * @returns A component who display fullName of our user and allow edit his itself
 */
export default function EditUser(): JSX.Element {

	const fullName: string = useSelector((state: rootState) => state.user.firstName + " " + state.user.lastName);
	const [inputName, setInputName] = useState("");
	
	const dispatch = useDispatch();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const [firstName, lastName] = inputName.split(" ") || "";

		if (firstName.length || lastName.length < 4) {
			// do the fetch Try catch finally
			// if all is ok dispatch to redux else don't dispatch
			dispatch(updateUser({ firstName: firstName, lastName: lastName }));
		}

	};
	
	return (
		<div className="edit-user">
			<h1>Welcome back<br />{fullName}</h1>

			<form onSubmit={handleSubmit}>
				<input name="input-name"
					placeholder={fullName}
					onChange={(e) => {setInputName(e.target.value);}}
					required
					minLength={4}>
				</input>
				<button className="edit-button">Edit Name</button>
			</form>
		</div>
	);

}