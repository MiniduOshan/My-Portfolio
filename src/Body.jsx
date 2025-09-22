import React from 'react'
import dp from './assets/dp.png'

function Body(props) {
  return (
    <div className="card rounded-lg shadow-md bg-white h-full flex flex-col">
        {props.children}
    </div>

  )
}

export default Body
