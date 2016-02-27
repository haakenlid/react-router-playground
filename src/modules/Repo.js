import React from 'react'

var Repo = React.createClass({
  
  render() {
    return (
      <div>
        <h2>{this.props.params.repoName}</h2>
        <p>username: {this.props.params.userName}</p>
      </div>
    )
  }
})
export default Repo 
