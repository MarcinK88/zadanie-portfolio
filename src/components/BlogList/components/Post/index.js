import React from 'react';
import s from './style.module.css';
import { Link } from 'react-router-dom';

export default function Post({ id, title, description, image, date, author, avatar, category, tags }) {
    return (
        <Link to={`/blog/${id}` }>
        <div className={s.root}>
            <img src={image} />
            <div className={s.text}>
                <h4 className="mt-4 mb-4">{title}</h4>
                <div className="d-flex column-direction m-2 mt-2" /> 
                    <div>
                        {category}
                    </div>
                    <div>
                        {date}
                    </div>
                    <div classname={s.description}>
                        {description}
                    </div>
                    <div className={s.tags}>
                        {tags.join(', ')}
                    </div>
            </div>
        </div>
        </Link>
    )
}