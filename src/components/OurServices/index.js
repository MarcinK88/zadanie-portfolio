import React from 'react';
import s from './style.module.css'
import Service from './components/Service'

export default function OurServices({title, service}) {
    return (
        <div className="container">
            <h3>{title}</h3>
            <div>
                {service.map((singleService) =>(<Service {...singleService} />))}
            </div>
            
        </div>
    )
}