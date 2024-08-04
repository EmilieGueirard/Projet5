import React from 'react';
import Banner from '../components/Banner';
import BannerImg from '../assets/images/paysage-montagne.webp';

const About = () => {
  return (
    <div>
    <Banner img={BannerImg} alt="Paysage de montagnes"></Banner>
  </div>
  );
};

export default About;