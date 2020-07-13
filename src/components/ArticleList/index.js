import React from 'react'
import { connect } from 'react-redux'

function ArticleList({ title, articles }) {
    return (
        <div className="container">
            <h1>{title}</h1>
            {articles.map(article => (
                <div>
                    <h1>{article.title}</h1>
                    <div>{article.description}</div>
                    <hr />
                </div>
            ))}

        </div>
    )
}

const mapStateToProps = (state) => ({
    articles: state.articles
})


export default connect(mapStateToProps)(ArticleList)