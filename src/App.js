import React from 'react';
import logo from './logo.svg';
import { homepage } from './homepage.const.js';
import './App.css';
import './index.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Header from './components/Header';
import OurServices from './components/OurServices';
import OurProjects from './components/OurProjects';
import Footer from './components/Footer';
import BlogList from './components/BlogList';
import CTAComponent from './components/CTA';

// https://getbootstrap.com/docs/4.4/components/alerts/



  function App() {
    const {
      companyName,
      navigation,
      hero,
      CTA2,
      CTA,
      ourProjects,
      ourServices,
      blogs,
      contact,
      contactDetails,
    } = homepage;


    return (
      <div className="">
        <Header logo={companyName} menu={navigation} />
        <Hero {...hero} />
        <CTAComponent {...CTA} />
        <OurServices {...ourServices} />
        <OurProjects {...ourProjects} />
        <CTAComponent {...CTA2} />
        <BlogList {...blogs} />
        <Footer {...contact} {...contactDetails} />
      </div>

    );
  }



export default App;
