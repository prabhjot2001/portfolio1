import React from 'react'

const NewsCard = ({ heading, date, tag }) => {
    return (
        <div className='border-l-2 flex flex-col gap-10 pl-4 border-black text-[#222222]'>
            <div className='flex gap-4 items-center'>
                <span className='border-2 border-black font-semibold sm:px-4 sm:py-2 px-2 py-1 rounded-full'>{tag}</span>
                <span className='text-gray-700'>{date}</span>
            </div>
            <div>
                <h2 className='font-semibold  text-xl sm:text-2xl'>{heading}</h2>
            </div>
            <div className='transition-all duration-300'>
                <span className='uppercase font-semibold hover:underline hover:cursor-pointer text-xl'>Read more</span>
            </div>
        </div>
    )
}

export default NewsCard