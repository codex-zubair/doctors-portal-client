import React from 'react';
import Button from '../Button/Button';

const AppointmentCard = () => {
    return (
        <div className='card  text-center flex flex-col gap-2 py-5 bg-base-100 shadow-xl'>
            <h3 className='text-xl font-semibold text-secondary'>Teeth Orthodontics</h3>
            <p  className='text-xl'>8:00 AM - 9:00 AM</p>
            <p>10 SPACES AVAILABLE</p>
            <div className='w-10/12 mx-auto'>
            <Button>Book Appointment</Button>
            </div>
        </div>
    );
};

export default AppointmentCard;