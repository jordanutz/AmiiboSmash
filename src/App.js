import React, { Component } from 'react'
import './Reset.css'
import axios from 'axios'
import Header from './Components/Header/Header'
import Selection from './Components/Selection/Selection'

class App extends Component {
  constructor() {
    super()
    this.state = {
      amiibo: []
    }
  }

  componentDidMount () {
    axios.get('http://www.amiiboapi.com/api/amiibo/').then(res => {
      this.setState({
        amiibo: res.data.amiibo
      })
    })
  }

  render() {

    let displayedAmiibo = this.state.amiibo.filter( (element, index) => {
      return element.amiiboSeries === "Super Smash Bros."
      && element.gameSeries !== "Final Fantasy"
      && element.gameSeries !== 'Fire Emblem'
      && element.name !== "R.O.B. (NES)"
      && element.gameSeries !== "Mii"
      && element.name !== "Bayonetta"
      && element.name !== "Mega Man (Gold Edition)"
      ;
    }).map( element => {
      return element
    })

    console.log(displayedAmiibo)

    return (
      <div className="App">
        <Header />
        <Selection />

      </div>
    );
  }
}

export default App;
