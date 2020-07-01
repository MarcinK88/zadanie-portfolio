import React from 'react';
import s from './style.module.css'

export default function Footer({ title, subtitle, phoneIcon, envelopeIcon, phone, email }) {
    return (
        <>
        <div className="container">
            <div className={s.root}>
                <h3>{title}</h3>
                <div className="mb-5">{subtitle}</div>
                <div className={s.contactDetails}>
                    <img src={phoneIcon} />{phone}
                </div>
                <div className={s.contactDetails}>
                    <img src={envelopeIcon} />{email}
                </div>
            </div>
        </div>

        </>
    )
} 