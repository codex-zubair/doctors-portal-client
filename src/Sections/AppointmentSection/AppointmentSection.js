import React from 'react';
// import bg from '../../assets/images/doctor-small.png';
import bg from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import Button from '../../Components/Button/Button';

const AppointmentSection = () => {
    return (
        <div className="hero my-10 py-5" style={{background: `url(${appointment})`}}>
            <div className="hero-content w-11/12 mx-auto flex-col lg:flex-row">
                <img src={bg} alt='doctor' className="-mt-36 max-w-sm rounded-lg shadow-2xl" />
                <div className='w-1/2 text-white'>
                    <h3>Appointment</h3>
                    <h1 className="text-5xl font-bold">Make an appointment Today</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentSection;