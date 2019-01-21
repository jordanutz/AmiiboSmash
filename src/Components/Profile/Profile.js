import React from 'react'
import './Profile.css'

const Profile = (props) => {

  // console.log(props.favorites)
  // console.log(props.character
  let favoriteButton = props.checkFavorite(props.favorites, props.character.name)

  let displayButton = favoriteButton && props.character.name ?
  <button className="FavoriteButton" onClick={() => props.addFavorite(props.character)}>Save Favorite</button>
  : null;

  return (
    <div className="Profile">
      <img src={props.character.image} /><br/>
      <h2>{props.character.name}</h2>
      {displayButton}
    </div>
  )
}

export default Profile
