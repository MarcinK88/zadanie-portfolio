import React from 'react';
import s from './style.module.css'
import Service from './components/Service'

export default function OurServices({title, service}) {
    return (
        <div className={`container ${s.root}`}>
            <h3 className="mb-5">{title}</h3>
            <div className="d-flex">
                {service.map((singleService) =>(<Service {...singleService} />))}
            </div>
            
        </div>
    )
}