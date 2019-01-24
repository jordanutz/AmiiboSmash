import React, {Component} from 'react'
import './Favorites.css'
import Favorite from '../Favorite/Favorite'

const Favorites = (props) => {

  // console.log(props.favorites)
  // console.log(displayedFavorites)

  const {favorites, deleteFavorite, editFavorite} = props

  let displayedFavorites = favorites.map( (favorite, index) => {
    return <Favorite key={index} {...favorite} deleteFavorite={deleteFavorite} editFavorite={editFavorite}/>
  })

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
