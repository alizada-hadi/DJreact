import React from 'react'
import { Route } from 'react-router-dom'
import ArticleList from './constainers/ArticleList'
import ArticleDetail from './constainers/ArticleDetail'


const BaseRoute = (props) => (
    <div>
        <Route exact path='/' component={ArticleList} />
        <Route exact path="/:articleID" component={ArticleDetail} />
    </div>
)

export default BaseRoute