import React from "react";
import "./EditUser.scss";
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../redux/userSlice';
import type { rootState } from '../../redux/store';
/**
 * 
 * @returns A component who display fullName of our user and allow edit his itself
 */
export default function EditUser(): JSX.Element {
	const fullName: string = useSelector((state: rootState) => state.user.firstName + " " + state.user.lastName);
	const inputNameRef = useRef<HTMLInputElement>(null);
	const dispatch = useDispatch();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const [firstName, lastName] = inputNameRef?.current?.value.split(" ") || "";

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
					ref={inputNameRef}
					required
					minLength={4}>
				</input>
				<button className="edit-button">Edit Name</button>
			</form>
		</div>
	);
}