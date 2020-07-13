import React from 'react';
import s from './style.module.css'
import Navigation from '.././Navigation'
import {connect} from 'react-redux';

function Header({ logo, menu, articles }) {
    return (
        <div className={s.header}>
            <div className="container">
                <div className="d-flex">
                    <div>{logo}</div>
                    <div> Mamy {articles.length} artykułów </div>
                    <div>
                        <Navigation menu={menu} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    articles: state.articles
})

export default connect(mapStateToProps)(Header)