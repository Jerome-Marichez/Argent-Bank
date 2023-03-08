import React from "react";
import "./Header.scss";
import Logo from "./argentBankLogo.png";
import { pathHome, pathSignIn } from '../../utils/routesNames';
/**
 * 
 * @returns A component who display a Header with Logo + SignIn
 */
export default function Header(): JSX.Element {

	return (
		<header>
			<nav className="main-nav">
				<a className="main-nav-logo" href={pathHome}>
					<img
						className="main-nav-logo-image"
						src={Logo}
						alt="Argent Bank Logo"
					/>
					<h1 className="sr-only">Argent Bank</h1>
				</a>
				<div>
					<a className="main-nav-item" href={pathSignIn}>
						<i className="fa fa-user-circle"></i> Sign In
					</a>
				</div>
			</nav>
		</header>
	);
}