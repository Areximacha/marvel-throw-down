import React from 'react'
import api from '../utils/api'

export default React.createClass({
  getInitialState () {
    return {
      loading: true,
      characters: []
    }
  },
  componentDidMount () {
    api.getCharacter()
      .then(response => {
        this.setState({
          loading: false,
          characters: response
        })
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
