import React from 'react'

function NewsCard(props) {
    return (
        <div className='rounded-lg pb-3 w-80 backdrop-blur-sm bg-black/30 text-white bg-opacity-70'>
            <img src={props.img_url} alt="article image"/>
            <div className="py-2 px-2">
                <h1 className='leading-4 font-bold text-sm'>{props.headline}</h1>
                <div className="flex items-center justify-between"><h3 className='text-xs bg-white/30 w-fit p-1 mt-1 font-bold rounded-md text-yellow-200'>{props.category.toUpperCase()}</h3></div>
                <p className='text-xs py-2'>
                    {props.description}
                </p>

            </div>
            <a href={props.url} className="my-2 mx-2 py-1 px-2 rounded-lg bg-orange-600 hover:bg-orange-500 font-bold">Read</a>
        </div>
    )
}

export default NewsCard