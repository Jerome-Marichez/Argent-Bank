
import React from "react";
import { useEffect, useRef, useState } from "react";

import useFetchToken from "../../hooks/useAuthToken";
import { useSelector, useDispatch } from 'react-redux';
import type { rootState } from '../../redux/store';
import { clearToken, setRemember, setToken } from '../../redux/userSlice';

import AuthMessage from "../AuthMessage/AuthMessage";

import "./AuthForm.scss";

/**
 * 
 * @returns A component who display a Auth Form
 */
export default function AuthForm(): JSX.Element {

	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	const [emailInput, setEmailInput] = useState<string>();
	const [passwordInput, setPasswordInput] = useState<string>();

	const [token, loading, code] = useFetchToken(emailInput, passwordInput);
	const dispatch = useDispatch();

	const remember = useSelector((state: rootState) => state.user.remember);


	/** Update State Redux */
	useEffect(() => {
		if (!code) { return; }

		if (code !== 200) {
			dispatch(clearToken());
			dispatch(setRemember(false));

		}
		else {
			dispatch(setToken(token));
			setTimeout(() => {
				window.location.href = './user';
			}, 500);

		}

	}, [loading]);
	/** END Update State Redux */

	/** Handle FORM  */
	const handleSubmit = (e: any) => {
		e.preventDefault();
		const emailHandle = emailRef?.current?.value ?? undefined;
		const passwordHandle = passwordRef?.current?.value ?? undefined;
		if ((emailHandle && passwordHandle) !== undefined) {
			setEmailInput(emailHandle);
			setPasswordInput(passwordHandle);
		}
	};
	/** END Update FORM */

	return (
		<div className="auth-form-content">

			<i className="fa fa-user-circle auth-form-icon"></i>
			<h1>Sign In</h1>
			<AuthMessage codeStatus={code} />
			<form onSubmit={handleSubmit}>
				<div className="input-wrapper">
					<label htmlFor="email">Email</label>
					<input type="text" id="email" ref={emailRef} required />
				</div>
				<div className="input-wrapper">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" ref={passwordRef} required />
				</div>
				<div className="input-remember">
					<input type="checkbox" onClick={() => { dispatch(setRemember(!remember)); }} defaultChecked={remember} id="remember-me" />
					<label htmlFor="remember-me" >Remember me</label>
				</div>


				<button className="auth-form-button">Sign In</button>

			</form>
		</div>
	);
}