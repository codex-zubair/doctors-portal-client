import React from 'react';

import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const HomeInfoSection = () => {
    return (
        <section className='grid gap-4 mx-5 lg:grid-cols-3 justify-around my-5 '>
          
          
            <div className="text-white card card-side shadow-xl p-5 bg-gradient-to-l from-primary to-secondary ">
                <figure><img src={clock} alt="clock" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Lorem Ipsum is simply dummy text of the pri</p>
                    <div className="card-actions justify-end">
                        
                    </div>
                </div>
            </div>




            <div className="text-white card card-side shadow-xl p-5 bg-accent">
                <figure><img src={marker} alt="marker" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Visit our location</h2>
                    <p>Brooklyn, NY 10036, United States</p>
                    <div className="card-actions justify-end">
                        
                    </div>
                </div>
            </div>




            <div className="text-white card card-side shadow-xl p-5 bg-gradient-to-l from-primary to-secondary ">
                <figure><img src={phone} alt="phone" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Contact us now</h2>
                    <p>+000 123 456789</p>
                    <div className="card-actions justify-end">
                        
                    </div>
                </div>
            </div>





        </section>
    );
};

export default HomeInfoSection;