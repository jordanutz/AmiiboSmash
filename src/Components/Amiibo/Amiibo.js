import React from 'react'
import './Amiibo.css'

const Amiibo = (props) => {
  console.log(props)

  // let colors = {
  //   "Super Mario": "#D10000",
  //   "The Legend of Zelda": "#0BC500",
  //   'Classic Nintendo': '#1C1C1C',
  //   "Animal Crossing": "#FEFB00",
  //   "Star Fox": "#4800E6",
  //   "Metroid": "#A700E6",
  //   "Pokemon": "#0071E6",
  //   'Kirby': '#E60046',
  //   'Splatoon': '#EE5E00',
  //   'Kid Icarus': '#00C9DF',
  //   'Wii Fit': '#00DFAA',
  //   'Earthbound': '#CF007B',
  //   'Pikmin': '#FF6767',
  //   'Pac-man': '#FFC715',
  //   'F-Zero': '#0001AD',
  //   'Xenoblade': '#CF00C9',
  //   'Punch Out': '#FF679C',
  //   'Megaman': '#67BBFF',
  //   'Sonic': '#6AFFF0'
  // }

  const {image, name, getCharacter, tail} = props

  return (
    <div className="Amiibo" onClick={() => getCharacter(tail)}>
      <img src={image} />
      <h1>{name}</h1>
    </div>
  )
}

export default Amiibo
