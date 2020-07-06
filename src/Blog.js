import React from 'react';
import { homepage } from './homepage.const.js';
import './App.css';
import './index.css';
import BlogList from './components/BlogList';

// https://getbootstrap.com/docs/4.4/components/alerts/



  function App() {
    const {
      blogs,
    } = homepage;


    return (
      <div className="">

        <BlogList {...blogs} />
      </div>

    );
  }



export default App;
