import React from 'react'
import NewsCard from '../components/NewsCard'

function News() {
  return (
    <div className="h-screen bg-[url('./assets/imgs/disaster.jpg')] bg-cover">
        <div className='h-1/4 w-full flex justify-center items-center'>
            <form action="#">
                <input type="text" placeholder='Enter news keyword' className='px-2 py-2 text-center w-80 rounded-l-lg'/>
                <button className='rounded-r-lg bg-blue-700 px-4 py-2 text-white font-black hover:bg-blue-500'>Go</button>
            </form>
        </div>
        <div className='h-3/4 flex items-center justify-evenly'>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
        </div>
    </div>
  )
}

export default News