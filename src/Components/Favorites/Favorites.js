import React, {Component} from 'react'
import './Favorites.css'
import Favorite from '../Favorite/Favorite'

const Favorites = (props) => {
  // console.log(props.favorites)

  let displayedFavorites = props.favorites.map( (favorite, index) => {
    return <Favorite key={index} {...favorite} deleteFavorite={props.deleteFavorite} editFavorite={props.editFavorite}/>
  })

  // console.log(displayedFavorites)

  return (
    <div className="Favorites">
      <h1>Favorites</h1>
      <div className="FavoritesSelection">
        {displayedFavorites}
      </div>
    </div>
  )
}

export default Favorites
