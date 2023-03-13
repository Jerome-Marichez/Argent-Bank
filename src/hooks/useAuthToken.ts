import { useEffect, useState } from "react";

/**
 * 
 * @param email used as a parameter for authentication
 * @param password  used as a parameter for authentication
 * @returns A custom hook with three states [token, loading, error]:
 * 
 * token = an empty string or a JWT token if authentication is successful
 * 
 * loading = a boolean with state set to false if the request has been completed
 * 
 * code = a number with state set with one of the following values:
 
 * - 200 = Sucessful connection (token is grabbed)
 * 
 * - 400 = Invalid Input 
 * 
 * - 500 = Internal Error or unknown error
 * 
 */
export default function useAuthToken(email: string | undefined, password: string | undefined) {


	const apiPath: string = process.env.REACT_APP_LOGIN_API_URL ?? "http://localhost:3001/api/user/login";

	const [loading, setLoading] = useState(true);
	const [error, setCode] = useState<number>(0);
	const [token, setToken] = useState<string>("");


	useEffect(() => {

		(async () => {
			setLoading(true);
			setCode(0);
			setToken("");

			try {
				if (email || password !== undefined) {

					const response: Response = await fetch(apiPath, {
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						},
						method: "POST",
						body: JSON.stringify({
							"email": email,
							"password": password
						})
					});
					const responseToken: any = await response.json();

					switch (responseToken.status) {

						case 200:
							setCode(200);
							setToken(responseToken.body.token);
							break;
						case 400:
							setCode(400);
							break;
						case 500:
							setCode(500);
							break;
						default:
							setCode(500);
					}


				}
			}
			catch {
				setCode(500);
			}
			finally {
				setLoading(false);
			}

		})();

	}, [email, password]);


	return [token,
		loading,
		error
	] as const;

}