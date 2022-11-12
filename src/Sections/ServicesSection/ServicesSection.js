import React from 'react';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import teeth from '../../assets/images/whitening.png';

const ServicesSection = () => {

    const services = [
        {
            id:1,
            title: "Fluoride Treatment",
            intro: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluoride
        },
        {
            id:2,
            title: "Cavity Filling",
            intro: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity
        },
        {
            id:3,
            title: "Teeth Whitening",
            intro: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: teeth
        },
    ]


    return (
        <section>
        <h3 className='text-primary text-center'>OUR SERVICES</h3>
        
        <h2>Services We Provides</h2>


        <div className='grid grid-cols-3 gap-4 my-5'>
        {services.map(service => <ServiceCard key={service.id} service = {service}></ServiceCard>)}
        </div>

        </section>
    );
};

export default ServicesSection;