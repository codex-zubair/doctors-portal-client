import React from 'react';
import Banner from '../../Components/Banner/Banner';
import DentalCareSection from '../../Sections/DentalCareSection/DentalCareSection';
import HomeInfoSection from '../../Sections/HomeInfoSection/HomeInfoSection';
import ServicesSection from '../../Sections/ServicesSection/ServicesSection';

const Home = () => {
    return (
        <body>
            <Banner></Banner>
            <HomeInfoSection></HomeInfoSection>
            <ServicesSection></ServicesSection>
            <DentalCareSection></DentalCareSection>


          

        </body>
    );
};

export default Home;