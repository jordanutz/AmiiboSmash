import React, {Component} from 'react'
import './Favorite.css'

class Favorite extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      editName: false
    }
  }

  handleName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  toggleEdit = () => {
    this.setState({
      editName: !this.state.editName
    })
  }

  render () {

    // console.log(this.props)

    let editButton = this.state.editName ?
    <div className="EditDisplay">
      <input onChange={this.handleName}/>
      <button onClick={() => this.props.editFavorite(this.props.id, this.state.name)}>Submit</button>
    </div> :
    <button onClick={this.toggleEdit}>Edit</button>

    return (
      <div className="SingleFavorite">
        <img src={this.props.image} />
        <h2>{this.props.name}</h2>
        <div className="FavoritesButton">
          {editButton}
          <button onClick={() => this.props.deleteFavorite(this.props.id)}>Delete</button>
        </div>
      </div>
    )
  }
}

export default Favorite
