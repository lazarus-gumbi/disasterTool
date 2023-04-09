import React from 'react'
import './index.css'
import weather from './assets/imgs/weather.jpg'
import disaster from './assets/imgs/disaster.jpg'
import covid from './assets/imgs/covid.jpg'
import search from './assets/imgs/search.jpg'

function App() {
  return (
    <div className="w-full h-screen grid grid-rows-2 grid-cols-2">
      <a href="#"><img src={disaster} alt="" srcset="" className='h-full w-full bg-cover object-cover'/></a>
      <a href="#"><img src={weather} alt="" srcset="" className='h-full w-full bg-cover object-cover'/></a>
      <a href="#"><img src={covid} alt="" srcset="" className='h-full w-full bg-cover object-cover'/></a>
      <a href="#"><img src={search} alt="" srcset="" className='h-full w-full bg-cover object-cover'/></a>
    </div>
  )
}

export default App