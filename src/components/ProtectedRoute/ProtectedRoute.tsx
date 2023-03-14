
import React from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../redux/store";

import { useNavigate } from "react-router-dom";
import { pathSignIn } from "../../utils/routesNames";

export default function ProtectedRoute({ children }: { children: JSX.Element }): JSX.Element {
	const navigate = useNavigate();
	const token: string = useSelector((state: rootState) => state.user.token);

	if (!token) navigate(`/${pathSignIn}`);

	return children;
};
