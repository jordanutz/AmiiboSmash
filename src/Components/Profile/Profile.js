import React from 'react'
import './Profile.css'
import Single from '../Single/Single'

const Profile = (props) => {
  // console.log(props.character)

  return (
    <div className="Profile">
      <img src={props.character.image} /><br/>
      {props.character.name}
    </div>
  )
}

export default Profile
