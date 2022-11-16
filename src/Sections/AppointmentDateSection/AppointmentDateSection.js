import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentCard from '../../Components/AppointmentCard/AppointmentCard';

const AppointmentDateSection = ({ selected }) => {

    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState({});

    useEffect(() => {

             fetch('appointmentOption.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
       
    }, [])



    return (
        <section className='my-28'>
            <h3 className='text-center text-xl text-secondary'>Available Appointments on {format(selected, 'PP')}  </h3>
            <div className='grid lg:grid-cols-3 gap-5'>
                {appointmentOptions.map((item,index) => <AppointmentCard key={index} treatment ={treatment} selected={selected} setTreatment ={setTreatment} appointmentOption = {item} ></AppointmentCard>)}
            </div>
        </section>
    );
};

export default AppointmentDateSection;