import React from "react";
import "./Header.scss";
import Logo from "./argentBankLogo.png";
import { pathHome, pathSignIn, pathUser } from '../../utils/routesNames';
import { Link, useLocation } from "react-router-dom";

import type { rootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/userSlice';

/**
 * 
 * @returns A component who display a Header
 */
export default function Header(): JSX.Element {

	const myLocation: string = useLocation().pathname;
	const fullName: string = useSelector((state: rootState) => state.user.firstName + " " + state.user.lastName);
	const isUserPage: boolean = (myLocation === `/${pathUser}`);

	const dispatch = useDispatch();

	const logOut = () => {
		dispatch(logout());
	};

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

					{isUserPage ?
						<>
							<Link className="main-nav-item" to={pathUser}>
								<i className="fa fa-user-circle"></i> {fullName}
							</Link>
							<Link onClick={logOut} className="main-nav-item" to={pathSignIn}>
								<i className="fa fa-sign-out"></i> Logout
							</Link>
						</>
						:
						<Link className="main-nav-item" to={pathSignIn}>
							<i className="fa fa-user-circle"></i> Sign In
						</Link>
					}
				</div>
			</nav>
		</header>
	);
	
}