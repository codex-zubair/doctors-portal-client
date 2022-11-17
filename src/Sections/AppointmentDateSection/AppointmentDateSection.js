import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentCard from '../../Components/AppointmentCard/AppointmentCard';

const AppointmentDateSection = ({ selected }) => {

    const [treatment, setTreatment] = useState({});


    // const {data : appointmentOptions = } = useQuery({
    const {data : appointmentOptions} = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: async ()=> fetch('http://localhost:5000/appointment')
            .then(res => res.json())
    })




    return (
        <section className='my-28'>
            <h3 className='text-center text-xl text-secondary'>Available Appointments on {format(selected, 'PP')}  </h3>
            <div className='grid lg:grid-cols-3 gap-5'>
                {appointmentOptions?.map((item, index) => <AppointmentCard key={index} treatment={treatment} selected={selected} setTreatment={setTreatment} appointmentOption={item} ></AppointmentCard>)}
            </div>
        </section>
    );
};

export default AppointmentDateSection;