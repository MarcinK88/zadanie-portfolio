import React from 'react';
import s from './style.module.css'

export default function Service({ title, subtitle, icon }) {
    return (
        <div className={s.root}>
            <div className={s.imageWrapper} >
            <img src={icon} />
            </div>
            <h4 classname="mb-4 mt-4">{title}</h4>
            
            <div>{subtitle}</div>
        </div>
    )
}