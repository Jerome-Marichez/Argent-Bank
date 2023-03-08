import React from "react";
import AuthForm from "../components/AuthForm/AuthForm";

export default function SignIn(): JSX.Element {

	return (
		<main className="main bg-dark">
			<section id="sign-in" className="sign-in">
				<AuthForm />
			</section>
		</main>
	);
}