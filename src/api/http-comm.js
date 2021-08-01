import Cookies from "js-cookie";
import axios from "axios";

export const httpClient = axios.create({
	baseURL: "localhost/",
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
	// credentials: "same-origin",
	withCredentials: true,
});
