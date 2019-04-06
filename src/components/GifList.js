import React from 'react'

const GifList = (props) => {
  return (
    <li>
      <img src={props.gif.images.original.url}/>
    </li>
  )
}

export default GifList