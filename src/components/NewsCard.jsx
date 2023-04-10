import React from 'react'

function NewsCard() {
    return (
        <div className='rounded-lg pb-3 w-80 backdrop-blur-sm bg-black/30 text-white bg-opacity-70'>
            <img src="https://static.ffx.io/images/$zoom_0.3027%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_13/t_crop_custom/q_86%2Cf_jpg/f0a936fde318a2a56b5541015aa2e7793e57d6aa" alt="article image"/>
            <div className="py-2 px-2">
                <h1 className='leading-4 font-bold text-sm'>Prince Andrew’s deal with Giuffre bought one year of silence. Now the clause is about to expire</h1><h3 className='text-xs bg-white/30 w-fit p-1 mt-1 font-bold rounded-md'>GENERAL</h3>
                <p className='text-xs py-2'>
                    Giuffre is once again likely to be free to talk about the years of abuse she suffered at the hands of Jeffrey Epstein, the convicted sex offender.
                </p>

            </div>
            <a href="#" className="my-2 mx-2 py-1 px-2 rounded-lg bg-blue-600 hover:bg-blue-500">Read</a>
        </div>
    )
}

export default NewsCard