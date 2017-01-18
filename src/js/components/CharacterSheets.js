import React, { PropTypes } from 'react'

const RenderThumbnail = props => {
  if (props.url === '') {
    return <p>No image</p>
  }

  return <img src={props.url} />
}

const CharacterSheets = props => {
  return (
    <div className={`character-sheet side-${props.index}`}>
      <RenderThumbnail url={props.image} />
      <h2>{props.name}</h2>
      {props.description && <p>{props.description}</p>}
      <a href={props.more} target='_blank'>Find out more</a>
    </div>
  )
}

CharacterSheets.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  more: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

export default CharacterSheets
