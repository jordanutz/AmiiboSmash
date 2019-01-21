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
      filter: ''
    }
  }

  componentDidMount () {
    axios.get('http://www.amiiboapi.com/api/amiibo/').then(res => {
      let finalAmiibo = this.filterAmiibo(res)
      axios.post('/api/amiibo', {finalAmiibo}).then(res => {
        console.log(res.data)
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

    })
    return filteredAmiibo
  }

  getCharacter = (id) => {
    console.log(id)
    axios.get(`/api/amiibo/${id}`).then(res => {
      console.log(res.data)
      this.setState({
        character: res.data[0]
      })
    })
  }

  addFavorite = (favorite) => {
    console.log(favorite)
    axios.post('/api/favorite', favorite).then(res => {
      // console.log(res.data)
      this.setState({
        favorites: res.data
      })
    })
  }

  deleteFavorite = (id) => {
    console.log(id)
    axios.delete(`/api/favorite/${id}`).then(res => {
      console.log(res)
      this.setState({
        favorites: res.data
      })
    })
  }

  handleSearchFilter = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  render() {
    //
    // console.log(this.state.character)
    // console.log(this.state.favorites)


    return (
      <div className="App">
        <Header />
        <div className="MainApp">
          <div className="Selection">
            <h1>Choose a Character!</h1>
            <Selection amiibo={this.state.amiibo} getCharacter={this.getCharacter} />
            <Favorites favorites={this.state.favorites} deleteFavorite={this.deleteFavorite}/>
          </div>
          <Profile character={this.state.character} addFavorite={this.addFavorite}/>
        </div>
      </div>
    );
  }
}

export default App;
