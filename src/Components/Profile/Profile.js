import React from 'react'
import './Profile.css'
import Single from '../Single/Single'

const Profile = (props) => {

  console.log(props.character)

  const favoriteButton = props.character.name ? <button className="FavoriteButton" onClick={() => props.addFavorite(props.character)}>Save Favorite</button> : null

  return (
    <div className="Profile">
      <img src={props.character.image} /><br/>
      <h2>{props.character.name}</h2>
      {favoriteButton}
    </div>
  )
}

export default Profile
