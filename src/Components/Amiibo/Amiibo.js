import React from 'react'
import './Amiibo.css'

const Amiibo = (props) => {
  console.log(props)
  return (
    <div className="Amiibo">
      <img src={props.image} />
      <h1>{props.name}</h1>

    </div>
  )
}

export default Amiibo