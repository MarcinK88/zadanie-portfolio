import React from 'react';
import s from './style.module.css'
import Project from './components/Project'

export default function OurProjects({ title, service }) {
    return (
        <div className="container-fluid">
            <div className={s.root} >
                <h3 className="mb-5">{title}</h3>

                <div className="row">

                    {service.map((project) => (
                        <div className="col-4 position-relative">
                            <Project {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}