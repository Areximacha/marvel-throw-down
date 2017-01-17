import React from 'react'

import CharacterSheets from '../containers/CharacterSheets'

export default React.createClass({
  render () {
    return (
      <div className='player-select'>
        <CharacterSheets />
      </div>
    )
  }
})
