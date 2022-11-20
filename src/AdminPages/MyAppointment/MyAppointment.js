import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { userAuthContext } from '../../Context/UserContext';

const MyAppointment = () => {

    const { user } = useContext(userAuthContext);

    const { data: bookings } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            return res.json();
        }
    })








    return (

        <div className='my-5 mx-2'>
            <h1 className='text-3xl my-2'>My Appointment</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {bookings?.map((booked, index)=> <tr key={index}>
                            <th>{1+index}</th>
                            <td>{booked.name}</td>
                            <td>{booked.treatment}</td>
                            <td>{booked.date}</td>
                            <td>{booked.slot}</td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MyAppointment;