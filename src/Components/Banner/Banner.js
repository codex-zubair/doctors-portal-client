import React from 'react';
import chair from  '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import Button from '../Button/Button';

const Banner = () => {
    return (
        <section className="w-10/12 mx-auto hero py-24" style={{backgroundImage : `url(${bg})`}}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='w-8/12 px-6'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                   <Button>Get Started</Button>
                </div>
            </div>
        </section>
    );
};

export default Banner;