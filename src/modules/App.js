import React from 'react'
import NavLink from './NavLink.js'

const App = React.createClass({
  render() {
    return (
    <div>
      <h1>Repos are nice</h1>
      <ul role="nav">
        <li><NavLink onlyActiveOnIndex to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/repos">Repos</NavLink></li>
      </ul>
      {this.props.children}
    </div>
    )
  }
})

export default App

