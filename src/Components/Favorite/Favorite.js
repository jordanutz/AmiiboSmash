import React from 'react'
import './Favorite.css'

const Favorite = (props) => {
  return (
    <div className="SingleFavorite">


      <img src={props.image} />
      <h2>{props.name}</h2>
      <button>Edit</button>
      <button onClick={() => props.deleteFavorite(props.id)}>Delete</button>

    </div>
  )
}

export default Favorite
