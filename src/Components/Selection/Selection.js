import React, {Component} from 'react'
import './Selection.css'

class Selection extends Component {
  render () {
    return (
      <aside>
        {this.props.amiibo}
      </aside>
    )
  }
}

export default Selection
