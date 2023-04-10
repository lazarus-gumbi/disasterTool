import React, { useState, useEffect } from 'react'
import NewsCard from '../components/NewsCard'
import { url } from '../components/secrets'



function News() {

    const [news, setNews] = useState([])
    const [keyword, setKeyword] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(function (data) { 
                setLoading(false)
                setNews(data.data) })

    }, [])

    const handleSubmit = () => {
        // e.preventDefault()
        setLoading(true)
        fetch(`${url}&keywords=${keyword}`)
            .then(response => response.json())
            .then(function (data) {
                setLoading(false)
                setNews(data.data)
            })


    }



    return (
        <div className="h-screen bg-[url('./assets/imgs/disaster.jpg')] bg-cover">
            <div className='h-1/4 w-full flex justify-center items-center'>
                <div>
                    <input type="text" placeholder='Enter news keyword' className='px-2 py-2 text-center w-80 rounded-l-lg' value={keyword} onChange={(e) => { setKeyword(e.target.value) }} />
                    <button className='rounded-r-lg bg-blue-700 px-4 py-2 text-white font-black hover:bg-blue-500' onClick={() => { handleSubmit() }}>Go</button>
                </div>
            </div>
            <div className='h-3/4 flex items-center justify-evenly'>

                {loading ? <p className='text-white/40 font-black text-6xl'>Loading...</p> : news.slice(0, 3).map(i => {
                    return <NewsCard img_url={i.image ? i.image : "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} headline={i.title} description={i.description.substring(0, 150)} url={i.url} category={i.category} />

                })}


            </div>
        </div>
    )
}

export default News