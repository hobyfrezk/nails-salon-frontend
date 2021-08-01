import Cookies from "js-cookie";
import axios from "axios";

const headers = {
	"Content-Type": "application/json",
	Accept: "application/json",
	"X-CSRFToken": Cookies.get("csrftoken"),
};

const config = {
	headers: headers,
	credentials: "same-origin",
	withCredentials: true,
};

export async function apiLogin(data) {

	const loginURL = "http://localhost/api/accounts/login/";

	const response = await axios.post(loginURL, data, config);
	console.log(response);
	return response.data;
}

export async function loginStatus() {

	const loginStatusURL = "http://localhost/api/accounts/login_status/";

	const response = await axios.get(loginStatusURL, config);
	
	return response.data;
}

export async function logout() {
	const logoutURL = "http://localhost/api/accounts/logout/";

	const response = await axios.post(logoutURL, config);
	console(response)
	return response.data;
}