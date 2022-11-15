import React, { useState } from 'react';
import AppointmentBanner from '../../Components/AppointmentBanner/AppointmentBanner';
import AppointmentDateSection from '../../Sections/AppointmentDateSection/AppointmentDateSection';

const Appointment = () => {

    const [selected, setSelected] = useState(new Date());


    return (
        <div>
            <AppointmentBanner selected={selected} setSelected = {setSelected}></AppointmentBanner>
            <AppointmentDateSection selected={selected} ></AppointmentDateSection>
        </div>
    );
};

export default Appointment;