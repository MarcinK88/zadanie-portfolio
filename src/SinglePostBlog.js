import React from 'react';
import { homepage } from './homepage.const.js';
import './App.css';
import './index.css';
import BlogList from './components/BlogList';

// https://getbootstrap.com/docs/4.4/components/alerts/



  function App({ match }) {
    const {
      blogs,
    } = homepage;

    const post = blogs.posts[match.params.id]

    return (
      <div className="container">
        <img className="w-100" src={post.image} />
        <h1>
          {post.title}
        </h1>
        <p>{post.description}</p>

        {match.params.id}
      </div>

    );
  }



export default App;
