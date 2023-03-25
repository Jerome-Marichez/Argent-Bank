

const BASE_API = "http://localhost:3001/api/v1/user";
const LOGIN_POST_URL = `${BASE_API}/login`;
const PROFILE_POST_URL = `${BASE_API}/profile`;
const PROFILE_PUT_URL = `${BASE_API}/profile`;


/**
 * 
 * @param response A Response from fetchUser() | fetchEditUser() | fetchAuth()
 * @returns Either a status code or the corresponding data.
 */
 async function handleResponse(response: Response): Promise<object | Number> {
	const responseBody: any = await response.json();
	if (responseBody.status !== 200 && !responseBody.body) { return responseBody.status; }
	return responseBody.body.token ?? responseBody.body;
}

/**
 * 
 * @param token The JWT token used for the request.
 * @returns An object of type 'User' containing all relevant details, or a status code represented as a number if the fetch was unsuccessful.
 */
export async function fetchUser(token: string): Promise<object | Number> {
	try {
		const response: Response = await fetch(PROFILE_POST_URL, {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
			method: "POST",
		});

		return await handleResponse(response); 
	}

	catch {
		return 404;
	}
};

/**
 * @param token A JWT token.
 * @param firstName 
 * @param lastName
 * @returns A correct response, otherwise a status code error represented as a number.
 */
export async function fetchEditUser(firstName: string, lastName: string, token: string): Promise<object | Number> {
	try {
		const response: Response = await fetch(PROFILE_PUT_URL, {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
			method: "PUT",
			body: JSON.stringify({
				"firstName": firstName,
				"lastName": lastName
			})

		});
		
		return await handleResponse(response); 
	}

	catch {
		return 404;
	}
};

/**
 * @param email 
 * @param password 
 * @returns If everything is fine, a JWT token; otherwise, a status code represented as a number.
 */
export async function fetchAuth(email: string, password: string): Promise<any | Number> {
	try {
		const response: Response = await fetch(LOGIN_POST_URL, {
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
		return await handleResponse(response); 
	}

	catch {
		return 404;
	}
};


