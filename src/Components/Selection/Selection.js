import React, {Component} from 'react'
import './Selection.css'
import axios from 'axios'
import Amiibo from '../Amiibo/Amiibo'
import Filter from '../Filter/Filter'


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
    console.log(this.props)

    let filterAmiibo = this.props.amiibo.filter(character => {
      return character.name.toLowerCase().indexOf(this.state.filterInput) !== -1;
    })

    let displayedAmiibo = filterAmiibo.map( (character, index) => {
      return <Amiibo key={index} index={index} {...character} getCharacter={this.props.getCharacter}/>
    })

    return (
      <div>
        <span>Filter by Name:</span><input onChange={this.handleInput}/>
        <aside>
          {displayedAmiibo}
        </aside>

      </div>
    )
  }
}

export default Selection
