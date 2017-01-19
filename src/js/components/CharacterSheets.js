import React, { PropTypes } from 'react'

import placeholder from '../../img/icons/profile-placeholder.png'

const RenderThumbnail = props => {
  if (props.url === '') {
    return <img src={placeholder} />
  }

  return <img src={props.url} />
}

const CharacterSheets = props => {
  return (
    <div className={`character-sheet-wrapper side-${props.index}`}>
      <div className='character-sheet'>
        <div className='overlay' />
        <div className='profile'>
          <div className='img-wrapper'>
            <RenderThumbnail url={props.image} />
          </div>
          <h2>{props.name}</h2>
          {props.description && <p>{props.description}</p>}
          <a href={props.more} target='_blank'>Find out more ></a>
        </div>
      </div>
      <div className='vs-overlay' />
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
