import axios from "axios";
import getConfig from "./services";

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