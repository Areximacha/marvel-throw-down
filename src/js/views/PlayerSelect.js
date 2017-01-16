import React from 'react'
import api from '../utils/api'

export default React.createClass({
  componentDidMount () {
    api.getCharacter()
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.error(error)
      })
  },
  render () {
    return (
      <div className='player-select'>
        <h1>Player Select</h1>
      </div>
    )
  }
})
