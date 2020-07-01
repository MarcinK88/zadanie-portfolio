import React from 'react';

export default function Service({ title, subtitle, icon }) {
    return (
        <div>
            <img src={icon} />
            <h4>{title}</h4>
            <div>{subtitle}</div>
        </div>
    )
}