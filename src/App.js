import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Main from './Main';
import Blog from './Blog';
import { homepage } from './homepage.const.js';
import Header from './components/Header';
import SinglePostBlog from './SinglePostBlog';
import Images from './components/Images';

import Footer from './components/Footer';

// https://redux.js.org/basics/example

function App() {
  const {
    companyName,
    navigation,
    contact,
    contactDetails,
  } = homepage;
  return (
    <Router>
        <Header logo={companyName} menu={navigation} />
      <div>
        <Route exact path="/" component={Main} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:id" component={SinglePostBlog} />
        <Route
          path="/movies"
          render={({ match }) => match && <h1>Movies</h1>}
        />
        <Route
          path="/actors"
          children={({ match }) => match && <h1>Actors</h1>}
        />
      </div>
      <Images />
      <Footer {...contact} {...contactDetails} />

    </Router>
  )
}

export default App;