import React from 'react'
import '../index.css'

function Home() {
  return (
    <>
    <h1 className='bg-green-900 absolute px-10 py-5 font-bold text-3xl text-white logo'>N.D.M.A</h1>
    <div className="w-full h-screen grid grid-rows-2 grid-cols-2">
      <div className="bg-[url('./assets/imgs/disaster.jpg')] bg-cover page_name "><a href='#' className='px-5 bg-amber-600 bg-opacity-80 py-3 rounded-sm text-white font-black hover:bg-opacity-100'>Current Disaster</a></div>
      <div className="bg-[url('./assets/imgs/weather.jpg')] bg-cover page_name "> <a href='#' className='px-5 bg-blue-900 bg-opacity-80 py-3 rounded-sm text-white font-black hover:bg-opacity-100'>Weather</a></div>
      <div className="bg-[url('./assets/imgs/covid.jpg')] bg-cover page_name ">   <a href='#' className='px-5 bg-purple-900 bg-opacity-80 py-3 rounded-sm text-white font-black hover:bg-opacity-100'>Covid 19</a></div>
      <div className="bg-[url('./assets/imgs/search.jpg')] bg-cover page_name ">  <a href='#' className='px-5 bg-red-900 bg-opacity-80 py-3 rounded-sm text-white font-black hover:bg-opacity-100'>Find Person</a></div>
    </div>
    </>
  )
}

export default Home