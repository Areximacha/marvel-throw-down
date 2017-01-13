import React from 'react'

import Header from './Header'
import Footer from './Footer'

export default React.createClass({
  render () {
    return (
      <div className='main'>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
})
