import React from 'react';
import s from './style.module.css';
import AddArticle from '../AddArticle';


export default function Hero({ images, title, subtitle, button }) {

    return (

        <div className={s.root}>
            <div className={s.bg} style={{backgroundImage: `url(${images[0]})`}}>
                <div className="d-flex align-items-center h-100">
                <div className={s.text}>
                    <h2>{title}</h2>
                    <div className="mt-4 mb-4">{subtitle}</div>
                    <button className="btn btn-primary btn-lg" >{button}</button>
                    <AddArticle />
                </div>
            </div>
            </div>
        </div>



        // <div style={style} className="jumbotron">
        
        //         <h1 className="display-4">{data.title}</h1>
        //         <p className="lead">{data.subtitle}</p>
        //         <hr className="my-4" />
        //         <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
        //         <a className="btn btn-primary btn-lg" href="#" role="button">{data.button}</a>
        //     </div>
    )

}


Hero.propTypes = {

}