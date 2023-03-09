import React from "react";
import "./EditUser.scss";

/**
 * 
 * @param fullname FullName of our user
 * @returns A component who display fullname of our user and allow edit his itself
 */
export default function EditUser({ fullname }: { fullname: string }): JSX.Element {
	return (
		<div className="header">
			<h1>Welcome back<br />Tony Jarvis!</h1>
			<button className="edit-button">Edit Name</button>
		</div>
	);
}