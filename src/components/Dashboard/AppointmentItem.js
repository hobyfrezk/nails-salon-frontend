import React from "react";

const AppointmentItem = ({item}) => {
  return <div>
    <div>start time: {item.appointment_time}</div>
    <div>duration: {item.duration}</div>
    <div>services: {item.services}</div>
    <div>staff: {item.staff}</div>
    <div>state: {item.is_canceled ? 'Canceled' : 'On schedule'}</div>
  </div>
}

export default AppointmentItem