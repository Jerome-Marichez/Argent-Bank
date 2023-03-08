import React from "react";
import "./Header.scss";
import Logo from "./argentBankLogo.png";
import { pathHome, pathSignIn } from '../../utils/routesNames';
import { Link } from "react-router-dom";
/**
 * 
 * @returns A component who display a Header with Logo + SignIn
 */
export default function Header(): JSX.Element {

	return (
		<header>
			<nav className="main-nav">
				<Link className="main-nav-logo" to={pathHome} >
					<img
						className="main-nav-logo-image"
						src={Logo}
						alt="Argent Bank Logo"
					/>
					<h1 className="sr-only">Argent Bank</h1>
				</Link>

				<div>
					<Link className="main-nav-item" to={pathSignIn}>
						<i className="fa fa-user-circle"></i> Sign In
					</Link>
				</div>
			</nav>
		</header>
	);
}