import React from 'react';
import { homepage } from './homepage.const.js';
import './App.css';
import './index.css';
import Hero from './components/Hero';
import OurServices from './components/OurServices';
import OurProjects from './components/OurProjects';
import BlogList from './components/BlogList';
import CTAComponent from './components/CTA';
import ArticleList from './components/ArticleList';

// https://getbootstrap.com/docs/4.4/components/alerts/



  function App() {
    const {
      hero,
      CTA2,
      CTA,
      ourProjects,
      ourServices,
      blogs,
    } = homepage;


    return (
      <div className="">
        <Hero {...hero} />
        <ArticleList />
        <CTAComponent {...CTA} />
        <OurServices {...ourServices} />
        <OurProjects {...ourProjects} />
        <CTAComponent {...CTA2} />
        <BlogList {...blogs} />
      </div>

    );
  }



export default App;
