
import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { clearToken, updateUser } from '../redux/userSlice';
import type { rootState } from '../redux/store';

/**
 * @returns A hook who read from redux the JWT Token and try update user profile in redux store though POST API if valid, otherwise reset JWT Token
 * 
 * Return two State [loading, valid]:
 * 
 * - loading = a boolean with state set to false if the request fetch has been completed
 * - valid = a boolean with state set to true if JWT Token is valid and update user profile worked.
 * 
 */
export default function useUserProfile() {

	const [valid, setValid] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);
	const apiPath: string = process.env.REACT_APP_PROFILE_POST_API_URL ?? "http://localhost:3001/v1/api/user/profile";

	const dispatch = useDispatch();
	const token: string = useSelector((state: rootState) => state.user.token);



	useEffect(() => {
		(async () => {
			setValid(false);
			setLoading(true);
			try {
				const response: Response = await fetch(apiPath, {
					headers: {
						'Accept': 'application/json',
						'Authorization': `Bearer ${token}`,
					},
					method: "POST",
				});


				const responseUser: any = await response.json();

				if (responseUser.status === 200 && responseUser.body) {
					const userObject: object = responseUser.body;
					dispatch(updateUser(userObject));
					setValid(true);
				} else {
					dispatch(clearToken());
					setValid(false);
				}

			}
			catch {
				setValid(false);
			}
			finally {
				setLoading(false);
			}


		})();
	}, []);


	return [loading, valid] as const;
}