import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

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
