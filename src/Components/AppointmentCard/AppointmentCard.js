import React from 'react';
import Modal from '../BookingModal/BookingModal';

const AppointmentCard = ({ appointmentOption ,treatment, setTreatment,selected }) => {

    const { name, slots } = appointmentOption;
    console.log()
    return (
        <div className='card  text-center flex flex-col gap-2 py-5 bg-base-100 shadow-xl'>
            <h3 className='text-xl font-semibold text-secondary'>{name}</h3>
            <p>
                {slots?.length > 0 ? slots[0] : 'try another day!'}
            </p>
            <p>
                {slots?.length} {slots?.length > 1 ? 'spaces' : 'space'} available!</p>





            <p>10 SPACES AVAILABLE</p>
            <div className='w-10/12 mx-auto'>
                <Modal  selected={selected} treatment={treatment}></Modal>
                <label disabled = {slots.length === 0} onClick={()=> setTreatment(appointmentOption)} htmlFor="booking-modal" className='btn bg-gradient-to-r from-secondary to-primary border-none text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary'>Book Appointment</label>
            </div>
        </div>
    );
};

export default AppointmentCard;