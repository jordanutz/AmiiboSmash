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

  handleSubmit = () => {
    this.props.editFavorite(this.props.id, this.state.name)
    this.toggleEdit()
  }

  render () {

    // console.log(this.props)

    const {editName} = this.state
    const {handleName, handleSubmit, toggleEdit} = this
    const {image, name, deleteFavorite, id} = this.props

    let editButton = editName ?
    <div className="EditDisplay">
      <input onChange={handleName}/>
      <button value={editName}
        onClick={() => handleSubmit()}>Submit</button>
    </div> :
    <button onClick={toggleEdit}>Edit</button>

    return (
      <div className="SingleFavorite">
        <img src={image} />
        <h2>{name}</h2>
        <div className="FavoritesButton">
          {editButton}
          <button onClick={() => deleteFavorite(id)}>Delete</button>
        </div>
      </div>
    )
  }
}

export default Favorite
