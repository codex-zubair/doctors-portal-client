import { format } from 'date-fns';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Modal = ({ treatment, selected }) => {

    const { slots, name } = treatment;
    const date = format(selected, 'PP');

    const bookingHandler = (event) => {
        event.preventDefault();


        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const date = form.date.value;
        const slot = form.slot.value;


        const booking = {
            treatment: treatment.name,
            name,
            email,
            phone,
            date,
            slot
        }

        console.log(booking);
        toast.success('Thanks! see you soon!')
    }


    return (

        <div>
            <div><Toaster /></div>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={bookingHandler} action="" className='flex flex-col'>
                        <input className='input w-full border my-2' name='date' disabled value={date} type="text" id="" placeholder='type' />
                        <select name="slot" id="">
                            {slots?.map((item, index) => <option key={index}>{item}</option>)}
                        </select>
                        <input className='input w-full border my-2' type="text" name="name" id="" placeholder='Your Name' />
                        <input className='input w-full border my-2' type="text" name="email" id="" placeholder='Email Address' />
                        <input className='input w-full border my-2' type="text" name="phone" id="" placeholder='Phone Number' />
                        <br />
                        <button type='submit' className='btn'>
                            <label type='submit' htmlFor="booking-modal" className="w-full btn">Submit</label>
                        </button>



                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;