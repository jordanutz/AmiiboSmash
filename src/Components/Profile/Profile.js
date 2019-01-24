import React from 'react'
import './Profile.css'

const Profile = (props) => {

  // console.log(props.favorites)
  // console.log(props.character

  const {checkFavorite, favorites, character, addFavorite} = props

  let favoriteButton = checkFavorite(favorites, character.name)

  let displayButton = favoriteButton && character.name ?
  <button className="FavoriteButton" onClick={() => addFavorite(character)}>Save Favorite</button>
  : null;

  return (
    <div className="Profile">
      <img src={character.image} /><br/>
      <h2>{character.name}</h2>
      {displayButton}
    </div>
  )
}

export default Profile
