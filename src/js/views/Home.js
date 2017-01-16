import React from 'react'

import { Link } from 'react-router'

export default React.createClass({
  render () {
    return (
      <div className='home'>
        <div className='hero-content grid-6 offset-3'>
          <h2>MARVEL THROW DOWN</h2>
          <p>Where we take two Marvel legends and pit them against each other.</p>
          <p>Who will win? You decide!</p>
          <Link to='/player-select' className='btn'>START</Link>
        </div>
      </div>
    )
  }
})