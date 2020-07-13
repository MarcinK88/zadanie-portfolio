import React from 'react';
import { connect } from 'react-redux';
import { createArticle } from '../../actions/article';

function AddArticle({ handleaddArticle, title }) {
    return (
        <button onClick={() => handleaddArticle( title || 'Testowy', 'Jarek', 'maly opis', 'duuuuzy opis')}>
            Dodaj artykul
        </button>
    )
}

function mapStateToProps(state) {
    return {}

    
}
const mapDispatchToProps = { 
    handleaddArticle: createArticle       
}

export default connect(mapStateToProps, mapDispatchToProps)(AddArticle);