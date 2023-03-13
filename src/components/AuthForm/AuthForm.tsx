
import React from "react";
import { useEffect, useRef, useState } from "react";

import { useSelector, useDispatch } from 'react-redux';
import type { rootState } from '../../redux/store';
import { clearToken, setRemember, setToken } from '../../redux/userSlice';

import { useNavigate } from "react-router-dom";

import { pathUser } from '../../utils/routesNames';
import AuthMessage from "../AuthMessage/AuthMessage";

import "./AuthForm.scss";

/**
 * 
 * @returns A component who display a Auth Form
 */
export default function AuthForm(): JSX.Element {


	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<string>();
	const [codeRequest, setCode] = useState<number>(0);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const remember = useSelector((state: rootState) => state.user.remember);



	/** Handle Submit  */
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			const apiPath: string = process.env.REACT_APP_LOGIN_API_URL ?? "http://localhost:3001/api/user/login";
			const response: Response = await fetch(apiPath, {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				method: "POST",
				body: JSON.stringify({
					"email": email,
					"password": password
				})

			});
			const responseToken: any = await response.json();
			if (responseToken.status !== 200) {
				setCode(responseToken.status);
			}
			dispatch(setToken(responseToken.body.token));
			navigate(`/${pathUser}`);
		}
		catch {
			setCode(500);
		}
	};
	/** End Handle Submit */

	return (
		<div className="auth-form-content">

			<i className="fa fa-user-circle auth-form-icon"></i>
			<h1>Sign In</h1>
			<AuthMessage codeStatus={codeRequest} />
			<form onSubmit={handleSubmit}>
				<div className="input-wrapper">
					<label htmlFor="email">Email</label>
					<input type="text" id="email" onChange={e => setEmail(e.target.value)} required />
				</div>
				<div className="input-wrapper">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" onChange={e => setPassword(e.target.value)} required />
				</div>
				<div className="input-remember">
					<input type="checkbox" onClick={() => { dispatch(setRemember(!remember)); }} defaultChecked={remember} id="remember-me" />
					<label htmlFor="remember-me" >Remember me</label>
				</div>

				<button className={'auth-form-button'}>Sign In</button>
			</form>
		</div >
	);
}