import React from 'react';
import bg from '../../assets/images/appointment.png'
import Button from '../../Components/Button/Button';

const FormSection = () => {
    return (
        <form className='mx-auto flex flex-col justify-center py-20 mt-24' style={{ backgroundImage: `url(${bg})` }}>

            <div className='text-center flex flex-col gap-4 mx-auto'>
                <h4 className='text-secondary font-semibold'>Contact Us</h4>
                <h1 className='text-white text-2xl'>Stay connected with us</h1>
                <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
                <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
                <textarea className="textarea max-w-xs" placeholder="Bio"></textarea>
                <button><Button>Submit</Button></button>
            </div>
        </form>
    );
};

export default FormSection;