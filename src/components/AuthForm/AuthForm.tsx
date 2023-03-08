
import React from "react";
import "./AuthForm.scss"; 

/**
 * 
 * @returns A component who display a Auth Form
 */
export default function AuthForm(): JSX.Element {
	return (
		<div className="auth-form-content">
			<i className="fa fa-user-circle auth-form-icon"></i>
			<h1>Sign In</h1>
			<form>
				<div className="input-wrapper">
					<label htmlFor="username">Username</label
					><input type="text" id="username" />
				</div>
				<div className="input-wrapper">
					<label htmlFor="password">Password</label
					><input type="password" id="password" />
				</div>
				<div className="input-remember">
					<input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
					>Remember me</label
					>
				</div>

				
				<button className="auth-form-button">Sign In</button>

			</form>
		</div>
	);
}