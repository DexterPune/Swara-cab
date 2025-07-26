import React from 'react';

import { Helmet } from 'react-helmet';
import Carousel from './Carousel';
import ServicesSection from '../pages/ServicesSection';
import AbouthomeSection from '../pages/AbouthomeSection';
import HomeServicesSection from '../pages/HomeServicesSection';
import ProjectsSection from '../pages/ProjectsSection';
import FunFactsSection from '../pages/FunFactsSection';
import BlogSection from '../pages/BlogSection';



const HeroSection = () => {
 
  return (


    <div className="th-hero-wrapper hero-1" id="hero">



       <Carousel/>
       <ServicesSection/>
       <AbouthomeSection/>
       <HomeServicesSection/>
       <ProjectsSection/>
       <FunFactsSection/>
    <BlogSection/>
    </div>
  );
};

export default HeroSection;
