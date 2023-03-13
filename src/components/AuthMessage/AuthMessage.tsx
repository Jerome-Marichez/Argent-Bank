
import React from "react";
import "./AuthMessage.scss";

/**
 * @param codeStatus Status code received from a fetch request (e.g., 400, 200, 500)
 * @example <AuthMessage codeError={400}/>
 * @returns Displays a message depending of the status code
 */
export default function AuthMessage({ codeStatus }: { codeStatus: number }): JSX.Element {

	switch (codeStatus) {

		case 200:
			return (
				<div className="message-ok">
					<p>Connected with success !</p>
				</div>
			);

		case 400:
			return (


				<div className="message-error">
					<p>Error {codeStatus} invalid inputs </p>
				</div>
			);

		case 500:
			return (


				<div className="message-error">
					<p>Error {codeStatus} Internal Server Error</p>
				</div>
			);


		default:
			return (<div></div>);
	}

}