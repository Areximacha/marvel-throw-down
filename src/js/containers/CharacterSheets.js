import React, { PropTypes } from 'react'
import api from '../utils/api'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
      let img = ''
      let more = ''
      if (!character.thumbnail.path.includes('image_not_available')) {
        img = `${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`
      }
      for (let i = 0; character.urls.length > i; i++) {
        if (character.urls[i].type === 'wiki') {
          more = character.urls[i].url
        }
      }
      if (more === '') {
        more = character.urls[0].url
      }
      return (
        <ReactCSSTransitionGroup
          transitionName={`slam-close-${index}`}
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={true}
          transitionEnterTimeout={500}>
          <CharacterSheets
            name={name}
            description={description}
            image={img}
            more={more}
            index={index}
            key={index} />
        </ReactCSSTransitionGroup>
      )
    })
  },
  render () {
    if (this.state.loading) {
      return <h2>Loading...</h2>
    }
    return (
      <div className='player-select'>
        {this.outputArray(this.state.characters)}
      </div>
    )
  }
})
