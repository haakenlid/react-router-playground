import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'
import App from './modules/App.js'
import About from './modules/About.js'
import Repos from './modules/Repos.js'
import Repo from './modules/Repo.js'
import Home from './modules/Home.js'

export const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/repos" component={Repos}>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
    </Route>
    <Route path="/about" component={About}/>
  </Route>
)
export const router = (<Router routes={routes} history={browserHistory}/>)
