import React from "react";
import AuthForm from "../components/AuthForm/AuthForm";

/**
 * 
 * @returns A Page SignIn which wrap HTML Elements + Components
 */
export default function SignIn(): JSX.Element {

	return (
		<main className="bg-dark">
			<section id="sign-in" className="sign-in">
				<AuthForm />
			</section>
		</main>
	);
	
}