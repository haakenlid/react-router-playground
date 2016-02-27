import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App.js'
import About from './About.js'
import Repos from './Repos.js'
import Repo from './Repo.js'
import Home from './Home.js'

var Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
)
export default Routes 

