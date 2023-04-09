import React from 'react'

function WeatherCard(props) {
    return (
        <div className='rounded w-60 text-center backdrop-blur-sm bg-black/30 text-white bg-opacity-70 px-4 py-4'>
            <h1 className='text-5xl py-6 font-black text-white'>{props.temp}°C</h1>
            <h3 className='text-l text-white font-black'>{props.city}</h3>
            <h4 className='text-xs font-extralight'>{props.date}</h4>
            <div className='flex justify-between py-6'>
                <div className="lft">
                    <h3 className='text-m font-black'>{props.wind}</h3>
                    <h3 className='text-xs'>WIND</h3>
                </div>
                <div className="cnt">
                    <h3 className='text-m font-black'>{props.rain}</h3>
                    <h3 className='text-xs'>RAIN</h3>
                </div>
                <div className="rgt">
                    <h3 className='text-m font-black'>{props.humidity}</h3>
                    <h3 className='text-xs'>HUMIDITY</h3>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard