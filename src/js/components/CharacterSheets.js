import React, { PropTypes } from 'react'

const CharacterSheets = props => {
  return (
    <div>
      <img src={props.image} />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  )
}

CharacterSheets.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired
}

export default CharacterSheets
