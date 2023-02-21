import React from 'react';
import AppointmentBody from '../AppointmentBody/AppointmentBody';
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";

const Appointment = () => {
    return (
        <div>
            <AppointmentHeader></AppointmentHeader>
            <AppointmentBody></AppointmentBody>
        </div>
    );
};

export default Appointment;