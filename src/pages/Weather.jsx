import React from 'react'
import '../index.css'
import WeatherCard from '../components/WeatherCard'

function Weather() {
  return (
    <div className="h-screen bg-[url('./assets/imgs/city.jpg')] bg-cover">
        <div className='h-1/4 w-full flex justify-center items-center'>
            <form action="#">
                <input type="text" placeholder='Enter City Name' className='px-2 py-2 text-center w-80 rounded-l-lg'/>
                <button className='rounded-r-lg bg-blue-700 px-4 py-2 text-white font-black hover:bg-blue-500'>Go</button>
            </form>
        </div>
        <div className='h-3/4 flex items-center justify-evenly'>
            <WeatherCard temp = '25' date='24 Apr 2023' city='Mbabane' wind='27km/h' rain='32%' humidity='24%'/>
            <WeatherCard temp = '25' date='24 Apr 2023' city='Mbabane' wind='27km/h' rain='32%' humidity='24%'/>
            <WeatherCard temp = '25' date='24 Apr 2023' city='Mbabane' wind='27km/h' rain='32%' humidity='24%'/>
            
        </div>
    </div>
  )
}

export default Weather