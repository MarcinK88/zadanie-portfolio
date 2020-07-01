import React from 'react';
import s from './style.module.css'


export default function Hero({ image, data }) {

    const style = {
        backgroundImage: `url(${image})`,
        // opacity: 0.8
        
    }

    return (

        <div className={s.root}>
            <div className={s.bg} style={style} />
            <div className={s.text}>
            <h1 className="display-4">{data.title}</h1>
            <p className="lead">{data.subtitle}</p>
            <hr className="my-4" />
            <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
            <a className={`btn btn-primary btn-lg btn-success ${s.button}`} href="#" role="button">{data.button}</a>
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