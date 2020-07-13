import React from 'react';
import s from './style.module.css'
import AddArticle from '.././AddArticle'

export default function CTA({ title, subtitle, background, opacity, button }) {
    return (
        <div className={s.root}>
            <div className={s.bg} style={{ backgroundImage: `url(${background})`, opacity: opacity }} />
                <div className="d-flex align-items-center h-100">
                    <div className={s.text}>
                        <h3>{title}</h3>
                        <AddArticle title="Tytul z CTA" />
                        <div className="mt-4 mb-4">{subtitle}</div>
                        <button className="btn btn-secondary">{button}</button>
                    </div>
              
            </div >
        </div >
    )
}