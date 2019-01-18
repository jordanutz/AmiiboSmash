import React, {Component} from 'react'
import './Selection.css'
import axios from 'axios'
import Amiibo from '../Amiibo/Amiibo'


class Selection extends Component {

  render () {
    console.log(this.props)

    let displayedAmiibo = this.props.amiibo.map( (character, index) => {
      // console.log(character)
      return <Amiibo key={index} index={index} {...character} getCharacter={this.props.getCharacter}/>
    })

    return (
      <aside>
        {displayedAmiibo}
      </aside>
    )
  }
}

export default Selection
