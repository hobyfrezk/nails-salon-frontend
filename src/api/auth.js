import Cookies from "js-cookie";
import axios from "axios";

const getConfig = () =>{

	const headers = {
		"Content-Type": "application/json",
		Accept: "application/json",
		"X-CSRFToken": Cookies.get("csrftoken"),
	}

	return {
			headers: headers,
			credentials: "same-origin",
			withCredentials: true,
		}
}


export async function apiLogin(data) {
	
	const config = getConfig()
	const loginURL = "http://localhost/api/accounts/login/";

	const response = await axios.post(loginURL, data, config);
	return response.data;
}

export async function loginStatus() {
	const config = getConfig()

	const loginStatusURL = "http://localhost/api/accounts/login_status/";

	const response = await axios.get(loginStatusURL, config);
	return response.data;
}

export async function apiLogout() {
	const config = getConfig()

	const logoutURL = "http://localhost/api/accounts/logout/";

	const response = await axios.post(logoutURL, {}, config);
	return response.data;
}