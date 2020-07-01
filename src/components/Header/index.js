import React from 'react';
import s from './style.module.css'
import Navigation from '.././Navigation'

export default function Header({ logo, menu }) {
    return (
        <div className={s.header}>
            <div className="container">
                <div className="d-flex">
                    <div>{logo}</div>
                    <div>
                        <Navigation menu={menu} />
                    </div>
                </div>
            </div>
        </div>
    )
}
