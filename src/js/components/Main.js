import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className='main'>
        {this.props.children}
      </div>
    )
  }
})