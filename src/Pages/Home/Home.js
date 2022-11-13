import React from 'react';
import Banner from '../../Components/Banner/Banner';
import AppointmentSection from '../../Sections/AppointmentSection/AppointmentSection';
import DentalCareSection from '../../Sections/DentalCareSection/DentalCareSection';
import FormSection from '../../Sections/FormSection/FormSection';
import HomeInfoSection from '../../Sections/HomeInfoSection/HomeInfoSection';
import ReviewSection from '../../Sections/ReviewSection/ReviewSection';
import ServicesSection from '../../Sections/ServicesSection/ServicesSection';

const Home = () => {
    return (
        <body>
            <Banner></Banner>
            <HomeInfoSection></HomeInfoSection>
            <ServicesSection></ServicesSection>
            <DentalCareSection></DentalCareSection>
            <AppointmentSection></AppointmentSection>
            <ReviewSection></ReviewSection>
            <FormSection></FormSection>


          

        </body>
    );
};

export default Home;