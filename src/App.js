import React, { Component } from 'react'
import './Reset.css'
import axios from 'axios'
import Header from './Components/Header/Header'
import Selection from './Components/Selection/Selection'
import Amiibo from './Components/Amiibo/Amiibo'
import Profile from './Components/Profile/Profile'
import Favorites from './Components/Favorites/Favorites'

class App extends Component {
  constructor() {
    super()
    this.state = {
      amiibo: [],
      character: {},
      favorites: [],
      filter: '',
      toggleFavorites: false,
    }
  }

  componentDidMount () {
    axios.get('http://www.amiiboapi.com/api/amiibo/').then(res => {
      let finalAmiibo = this.filterAmiibo(res)
      axios.post('/api/amiibo', {finalAmiibo}).then(res => {
        // console.log(res.data)
        this.setState({
          amiibo: res.data
        })
      })
    })
  }

  filterAmiibo = (res) => {
    // console.log(res.data.amiibo)
    let filteredAmiibo = res.data.amiibo.filter( (element, index) => {
      return element.amiiboSeries === "Super Smash Bros."
      && element.gameSeries !== "Final Fantasy"
      && element.gameSeries !== 'Fire Emblem'
      && element.name !== "R.O.B. (NES)"
      && element.gameSeries !== "Mii"
      && element.name !== "Bayonetta (Player 2)"
      && element.name !== "Mega Man (Gold Edition)"
      && element.name !== "R.O.B (Famicom)"
      && element.name !== 'Bayonetta'
      && element.name !== 'Ryu'

    })
    return filteredAmiibo
  }

  getCharacter = (id) => {
    console.log(id)
    axios.get(`/api/amiibo/${id}`).then(res => {
      // console.log(res.data)
      this.setState({
        character: res.data[0],
        toggleFavorites: false,
      })
    })
  }

  addFavorite = (favorite) => {
    console.log(favorite)
    axios.post('/api/favorite', favorite).then(res => {
      this.setState({
        favorites: res.data,
      })
    })
  }

  deleteFavorite = (id) => {
    // console.log(id)
    axios.delete(`/api/favorite/${id}`).then(res => {
      // console.log(res)
      this.setState({
        favorites: res.data,
        toggleFavorites: false
      })
    })
  }

  editFavorite = (id, name) => {
    // console.log(id, name)
    axios.put(`/api/favorite/${id}`, {name}).then(res => {
      console.log(res.data)
      this.setState({
        favorites: res.data.updatedFavorite,
        amiibo: res.data.updatedAmiibo,
      })
    })
  }

  handleSearchFilter = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  toggleFavorites = () => {
    this.setState({
      toggleFavorites: !this.state.toggleFavorites
    })
  }

  checkFavorite = (array, name) => {
    let favoriteButton = true;
    for (let i = 0; i < array.length; i++) {
      if (array[i].name === name) {
        favoriteButton = false
      }
    }
    return favoriteButton
  }

  render() {

    // console.log(this.state.character)
    // console.log(this.state.favorites)
    // console.log(this.state.favorites.length)
    // console.log(this.state.toggleFavorites)

    const {toggleFavorites, favorites, character, amiibo} = this.state
    const {deleteFavorite, editFavorite, addFavorite, checkFavorite, getCharacter} = this

  let viewFavorites = toggleFavorites ?
    <Favorites favorites={favorites}
      deleteFavorite={deleteFavorite}
      editFavorite={editFavorite}/> :

    <Profile character={character}
      addFavorite={addFavorite}
      favorites={favorites}
      checkFavorite={checkFavorite}/>

    return (
      <div className="App">
        <Header />
        <div className="MainApp">
          <div className="Selection">
            <h1>Choose a Character!</h1>
            <Selection amiibo={amiibo}
              getCharacter={getCharacter}
              toggleFavorites={this.toggleFavorites}
              favorites={favorites}/>
          </div>
          <div>
            {viewFavorites}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
