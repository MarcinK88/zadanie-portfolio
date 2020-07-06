import React, { useState, useEffect } from 'react';
import s from './style.module.css'
import Post from './components/Post'

export default function BlogList({ title, posts }) {
    const [slicedPosts, setSlicedPosts] = useState([]);
    const [hideButton, setHideButton] = useState(false);

    useEffect(() => {
        setSlicedPosts(
            posts.slice(0, 3),
        )
    }, [posts]);

    function showMore() {
        setSlicedPosts(
            posts
        );
        setHideButton(true);
    }

    return (
        <div className="container">
            <h2 className="text-center">{title}</h2>
            <div className="row">
                {slicedPosts.map((post, index) => (
                    <div className="col-4">
                        <Post id={index} {...post} />
                    </div>
                ))}
            </div>
            {!hideButton &&
                <button className="btn btn-primary" onClick={showMore}>Read More!!</button>
            }
        </div>
    )
}