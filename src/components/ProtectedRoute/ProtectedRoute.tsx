
import React from "react";
import useUserProfile from "../../hooks/useUserProfile";
import "./ProtectedRoute.scss"; 
import { Link } from "react-router-dom";
import { pathHome } from "../../utils/routesNames";

export default function ProtectedRoute({ children }: { children: any }) {

	const [loading, valid] = useUserProfile();

	if (loading) {
		/** replace ... by a splash loading */
		return "...";
	}

	if (!loading && valid) { return children; }
	
	if (!loading && !valid) {
		return (
			<>
				<div className="protected-route-error">
					<h2>Error something goes wrong</h2>
					<Link className="main-nav-item" to={`/${pathHome}`}>
						Back to Home
					</Link>
				</div>

			</>
		);
	}
};
