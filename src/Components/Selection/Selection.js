import React, {Component} from 'react'
import './Selection.css'
import axios from 'axios'
import Amiibo from '../Amiibo/Amiibo'

class Selection extends Component {
  constructor() {
    super()
    this.state = {
      filterInput: ''
    }
  }

  handleInput = (event) => {
    this.setState({
      filterInput: event.target.value
    })
  }

  render () {
    // console.log(this.props)

    const {amiibo, getCharacter, favorites, toggleFavorites} = this.props
    const {filterInput} = this.state
    const {handleInput} = this

    let filterAmiibo = amiibo.filter(character => {
      return character.name.toLowerCase().indexOf(filterInput) !== -1;
    })

    let displayedAmiibo = filterAmiibo.map( (character, index) => {
      return <Amiibo key={index} index={index} {...character} getCharacter={getCharacter}/>
    })

    let favoritesButton = favorites.length > 0 &&
    <button onClick={() => toggleFavorites()}>View Favorites ({favorites.length})</button>

    return (
      <div className="Selection">
        <div className="SelectionTools">
          <div className="SelectionFilter">
            <span>Filter by Name:</span><input onChange={handleInput}/>
          </div>
          {favoritesButton}
        </div>
        <aside>
          {displayedAmiibo}
        </aside>

      </div>
    )
  }
}

export default Selection
