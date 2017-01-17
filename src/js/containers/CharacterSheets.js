import React, { PropTypes } from 'react'
import api from '../utils/api'

import CharacterSheets from '../components/CharacterSheets'

export default React.createClass({
  PropTypes: {
    characters: PropTypes.array.isRequired
  },
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
  outputArray (characters) {
    return characters.map((character, index) => {
      let name = character.name
      let description = character.description
      let img = `${character.thumbnail.path}.${character.thumbnail.extension}`
      return (
        <CharacterSheets name={name} description={description} image={img} key={index} />
      )
    })
  },
  render () {
    return (
      <div>
        {this.outputArray(this.state.characters)}
      </div>
    )
  }
})
