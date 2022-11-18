import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentCard from '../../Components/AppointmentCard/AppointmentCard';
import Loading from '../../Shared/Loading/Loading';

const AppointmentDateSection = ({ selected }) => {

    const [treatment, setTreatment] = useState({});

    const date = format(selected, 'PP');





    // ! No need state auto state
    // !Getting data from the data base.
    // useEffect(()=> {
    //     fetch(`http://localhost:5000/appointment?date=${date}`)
    //     .then(res=> res.json())
    //     .then(data => setAppointmentOptions(data))
    // },[date])




    const { data:appointmentOptions , refetch,isLoading } = useQuery({
        // !Dependence
        queryKey: ['appointmentOptions',date],
        // ! Ass like an use loader of loader
        queryFn: () =>
          fetch(`http://localhost:5000/appointment?date=${date}`).then(res =>
            res.json()
          )
      })

      if(isLoading)
      {
        return  <Loading></Loading>
      }

    return (
        <section className='my-28'>
            <h3 className='text-center text-xl text-secondary'>Available Appointments on {format(selected, 'PP')}  </h3>
            <div className='grid lg:grid-cols-3 gap-5'>
                {appointmentOptions?.map((item, index) => <AppointmentCard refetch={refetch}  key={index} treatment={treatment} selected={selected} setTreatment={setTreatment} appointmentOption={item} ></AppointmentCard>)}
            </div>
        </section>
    );
};

export default AppointmentDateSection;