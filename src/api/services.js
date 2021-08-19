import Cookies from "js-cookie";

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

export default getConfig;