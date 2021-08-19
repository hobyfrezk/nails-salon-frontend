import Cookies from "js-cookie";
import axios from "axios";
import getConfig from "./services";

export async function apiListAppointments(user_id) {
	
	const config = getConfig()
	const listAppointmentsURL = `http://localhost/api/customers/${user_id}/appointments/`;

	const response = await axios.get(listAppointmentsURL, config);
	return response.data;
}