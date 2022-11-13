import React from 'react';
import comma from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
const ReviewSection = () => {


    return (
        <section>
            <div className='flex justify-between w-10/12 mx-auto'>
                <div>
                    <h3 className='text-secondary text-xl'>Testimonial</h3>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>

                <img src={comma} alt="" />
            </div>

            <div className='grid w-10/12 gap-4 mx-auto lg:grid-cols-3'>
                <div className='card p-5 bg-base-100 shadow-xl'>
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>

                    <div className='flex items-center p-4 gap-4'>
                        <div className="avatar w-12">
                            <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img alt='people' src={people1} />
                            </div>
                        </div>
                        <div>
                            <h4 className='text-lg font-semibold'>Winson Herry</h4>
                            <p>California, US</p>
                        </div>
                    </div>
                    
                </div>



                <div className='card p-5 bg-base-100 shadow-xl'>
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>

                    <div className='flex items-center p-4 gap-4'>
                        <div className="avatar w-12">
                            <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img alt='people' src={people2} />
                            </div>
                        </div>
                        <div>
                            <h4 className='text-lg font-semibold'>Miss Messy</h4>
                            <p>New York, US</p>
                        </div>
                    </div>
                    
                </div>




                <div className='card p-5 bg-base-100 shadow-xl'>
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>

                    <div className='flex items-center p-4 gap-4'>
                        <div className="avatar w-12">
                            <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img alt='people' src={people3} />
                            </div>
                        </div>
                        <div>
                            <h4 className='text-lg font-semibold'>Madona</h4>
                            <p>Texas, US</p>
                        </div>
                    </div>
                    
                </div>






            </div>

        </section>
    );
};

export default ReviewSection;