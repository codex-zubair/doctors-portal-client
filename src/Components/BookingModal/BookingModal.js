import { format } from 'date-fns';
import React from 'react';

const Modal = ({ treatment,selected }) => {

    const { slots, name } = treatment;
    const date = format(selected, 'PP');


    return (

        <div>
            {/* The button to open modal */}



            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form action="" className='flex flex-col'>
                        <input className='input w-full border my-2' disabled value={date}  type="text" name="" id="" placeholder='type' />
                        <select name="" id="">
                            {slots?.map(item => <option key={item._id}>{item}</option>)}
                        </select>
                        <input className='input w-full border my-2' type="text" name="" id="" placeholder='type' />
                        <input className='input w-full border my-2' type="text" name="" id="" placeholder='type' />
                        <input className='input w-full border my-2' type="text" name="" id="" placeholder='type' />
                        <br />
                        <button type='submit' className='btn'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;