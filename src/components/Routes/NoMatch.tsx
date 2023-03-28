import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { pathHome } from "../../utils/routesNames";

/**
 * 
 * @returns A component that is displayed if no routes match and redirects to the home page.
 */
export default function NoMatch(): JSX.Element {

	const navigate = useNavigate();
	console.log("unknown");
	useEffect(() => {
		navigate(`/${pathHome}`);
	}, []);

	return (<></>);
}