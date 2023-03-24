
import React from "react";
import { useState } from "react";

import { useSelector, useDispatch } from 'react-redux';
import type { rootState } from '../../redux/store';
import { setRemember, setToken } from '../../redux/userSlice';

import { useNavigate } from "react-router-dom";
import { fetchAuth } from "../../utils/fetchApi";
import AuthMessage from "../AuthMessage/AuthMessage";

import "./AuthForm.scss";
import { pathUser } from "../../utils/routesNames";

/**
 * 
 * @returns A component who display a Auth Form
 */
export default function AuthForm(): JSX.Element {

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [codeHTTP, setCodeHTTP] = useState<number>(0);
	const remember = useSelector((state: rootState) => state.user.remember);

	const dispatch = useDispatch();
	const navigate = useNavigate();


	/** Handle Submit  */
	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const answer = await fetchAuth(email, password);
	
		if (typeof answer === 'number') {
			setCodeHTTP(answer);
		} else {
			dispatch(setToken(answer));	
			navigate(`/${pathUser}`);
		}
		
	};
	/** End Handle Submit */

	return (
		<div className="auth-form-content">

			<i className="fa fa-user-circle auth-form-icon"></i>
			<h1>Sign In</h1>
			<AuthMessage codeStatus={codeHTTP} />
			<form onSubmit={handleSubmit}>
				<div className="input-wrapper">
					<label htmlFor="email">Email</label>
					<input type="email" id="email"
						autoComplete={remember ? 'username' : 'off'}
						onChange={e => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className="input-wrapper">
					<label htmlFor="password">Password</label>
					<input type="password" id="password"
						autoComplete={remember ? 'password' : 'new-password'}
						onChange={e => setPassword(e.target.value)}
						required
					/>
				</div>
				<div className="input-remember">
					<input type="checkbox" onChange={() => { dispatch(setRemember(!remember)); }} defaultChecked={remember} id="remember-me" />
					<label htmlFor="remember-me" >Remember me</label>
				</div>

				<button className={'auth-form-button'}>Sign In</button>
			</form>
		</div >
	);

}