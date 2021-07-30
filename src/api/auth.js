import Cookies from "js-cookie";
import axios from "axios";

// export async function apiLogin(data) {
// 	const headers = {
// 		"Content-Type": "application/json",
// 		Accept: "application/json",
// 		"X-CSRFToken": Cookies.get("csrftoken"),
// 	};

// 	const loginURL = "http://localhost/api/accounts/login/";
// 	const loginStatusURL = "http://localhost/api/accounts/login_status/";
// 	const logoutURL = "http://localhost/api/accounts/logout/";
// 	const listAppointmentsURL = "http://localhost/api/appointments/";

// 	const config = {
// 		headers: headers,
// 		credentials: "same-origin",
// 		withCredentials: true,
// 	};

// 	const response = await axios.post(loginURL, data, config);
// 	console.log(response);

// 	const response2 = await axios.get(loginStatusURL, config);
// 	console.log(response2.data);

//   headers["X-CSRFToken"] = Cookies.get("csrftoken");

// 	const response4 = await axios.get(listAppointmentsURL, config);
// 	console.log(response4.data);

// 	const response3 = await axios.post(logoutURL, {}, config);
// 	console.log(response3.data);

// }

export async function apiLogin(data) {
	const headers = {
		"Content-Type": "application/json",
		Accept: "application/json",
		"X-CSRFToken": Cookies.get("csrftoken"),
	};

	const loginURL = "http://localhost/api/accounts/login/";

	const config = {
		headers: headers,
		credentials: "same-origin",
		withCredentials: true,
	};

	const response = await axios.post(loginURL, data, config);
	console.log(response);
	return response.data;
}

export async function loginStatus() {
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

	const loginStatusURL = "http://localhost/api/accounts/login_status/";
	const response = await axios.get(loginStatusURL, config);
	return response.data;
}
