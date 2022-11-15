import { format } from 'date-fns';
import React from 'react';
import AppointmentCard from '../../Components/AppointmentCard/AppointmentCard';

const AppointmentDateSection = ({selected}) => {


   

    const appointments = [
            {id: 1,},
            {id: 2,},
            {id: 3,},
            {id: 4,},
            {id: 5,},
            {id: 6,},
    ]


    return (
        <section>
            <h3 className='text-center text-xl text-secondary'>Available Appointments on {format(selected, 'PP')}  </h3>
            <div className='grid lg:grid-cols-3 gap-5'>
                {appointments.map(item => <AppointmentCard key={item.id}></AppointmentCard>)}
            </div>
        </section>
    );
};

export default AppointmentDateSection;