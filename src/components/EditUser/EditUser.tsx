import React from "react";
import "./EditUser.scss";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../redux/userSlice';
import type { rootState } from '../../redux/store';
import AuthMessage from "../AuthMessage/AuthMessage";
/**
 * 
 * @returns A component who display fullName of our user and allow edit his itself
 */
export default function EditUser(): JSX.Element {

	const token: string = useSelector((state: rootState) => state.user.token);
	const firstName: string = useSelector((state: rootState) => state.user.firstName);
	const lastName: string = useSelector((state: rootState) => state.user.lastName);
	const [codeHTTP, setCodeHTTP] = useState<number>(0);

	const [inputFirstName, setInputFirstName] = useState<string>("");
	const [inputLastName, setInputLastName] = useState<string>("");

	const [toogle, setToogle] = useState<boolean>(false);
	const dispatch = useDispatch();


	const handleSubmit = async (e: any) => {
		e.preventDefault();

		try {
			const apiPath: string = process.env.REACT_APP_PROFILE_PUT_API_URL ?? "http://localhost:3001/api/v1/user/profile";
			const response: Response = await fetch(apiPath, {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`,
				},
				method: "PUT",
				body: JSON.stringify({
					"firstName": inputFirstName,
					"lastName": inputLastName
				})

			});
			const responseToken: { status: number, body: object } = await response.json();

			if (responseToken.status === 200) {
				dispatch(updateUser({ firstName: inputFirstName, lastName: inputLastName }));
				setToogle(false);
			} else {
				setCodeHTTP(responseToken.status);
			}
		} catch {
			setCodeHTTP(404);
		}
	};

	return (
		<div className="edit-user">
			<h1>Welcome back<br />{`${firstName} ${lastName}`}</h1>

			<AuthMessage codeStatus={codeHTTP} />
			<form onSubmit={handleSubmit}>
				{toogle ?
					<div className="group-element">
						<input name="input-firstname"
							placeholder={firstName}
							onChange={(e) => { setInputFirstName(e.target.value); }}
							required
							minLength={4}>
						</input>
						<input name="input-lastname"
							placeholder={lastName}
							onChange={(e) => { setInputLastName(e.target.value); }}
							required
							minLength={4}>
						</input>
					</div>
					: null
				}

				<div className="group-element">
					<button className="edit-button"
						onClick={() => setToogle(true)}>{toogle ? "Save" : "Edit Name"}
					</button>
					{toogle ? <button className="edit-button"
						onClick={() => setToogle(false)}>Cancel
					</button> : null}
				</div>
			</form>
		</div>
	);

}