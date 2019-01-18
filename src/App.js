import React, { Component } from 'react'
import './Reset.css'
import axios from 'axios'
import Header from './Components/Header/Header'
import Selection from './Components/Selection/Selection'
import Amiibo from './Components/Amiibo/Amiibo'
import Profile from './Components/Profile/Profile'

class App extends Component {
  constructor() {
    super()
    this.state = {
      amiibo: [],
      character: {}
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
      && element.name !== "Rosalina & Luma"
      && element.name !== "Zero Suit Samus"
      && element.name !== "Mr. Game & Watch"
      && element.name !== "Meta Knight"
      && element.name !== "King Dedede"
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

  render() {

    console.log(this.state.character)

    return (
      <div className="App">
        <Header />
        <div className="MainApp">
          <Selection amiibo={this.state.amiibo} getCharacter={this.getCharacter} />
          <Profile character={this.state.character}/>
        </div>
      </div>
    );
  }
}

export default App;
