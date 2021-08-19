import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import AppointmentItem from "./AppointmentItem";
import { apiListAppointments } from "api/appointment";
import { updateHistoryList } from "redux/appointmentSlice";

const AppointmentAccordion = ({expanded}) => {
  
	const authState = useSelector((state) => state.auth);
	const appointmentList = useSelector((state) => state.appointment.historyList);
	const { user } = authState;

	const dispatch = useDispatch();

  useEffect(()=>{
    async function getAppointmentsList() {
			const response = await apiListAppointments(user.id);
			console.log(response);
			dispatch(
				updateHistoryList({
					historyList: response.data,
				})
			);
		}
		getAppointmentsList();
  }, [dispatch, expanded])
  
  console.log(appointmentList)
	return (
		<div>
      {
        appointmentList ?
        appointmentList.map(
          (appointment) => <AppointmentItem item={appointment}/>) :
        null
      }
		</div>
	);
};

export default AppointmentAccordion;