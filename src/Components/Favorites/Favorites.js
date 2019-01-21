import React, {Component} from 'react'
import './Favorites.css'
import Favorite from '../Favorite/Favorite'

const Favorites = (props) => {
  console.log(props.favorites)

  let displayedFavorites = props.favorites.map( (favorite, index) => {
    return <Favorite key={index} {...favorite} deleteFavorite={props.deleteFavorite}/>
  })

  console.log(displayedFavorites)

  return (
    <div>

      {displayedFavorites}


    </div>
  )
}

export default Favorites
