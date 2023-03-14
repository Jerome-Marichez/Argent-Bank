
import React from "react";

import { useSelector } from "react-redux";
import { rootState } from "../../redux/store";

import { useNavigate } from "react-router-dom";
import { pathSignIn } from "../../utils/routesNames";
import { useEffect } from "react";


export default function ProtectedRoute({ children }: { children: JSX.Element }): JSX.Element {
	const navigate = useNavigate();
	const token: string = useSelector((state: rootState) => state.user.token);

	/** Using a useEffect here since React give me warning that navigate should be use
	 * under a useEffect
	 */

	useEffect(() => {
		if (!token) {
			navigate(`/${pathSignIn}`);
		}
	}, []);


	/** Return a empty fragment in else case for cover TypeScript need for JSX.Element */
	if (token) { return children; } else { return <></>; }


};
