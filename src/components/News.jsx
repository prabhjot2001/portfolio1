import React from 'react'
import { newsData } from '../data/data'
import NewsCard from './NewsCard'

const News = () => {
    return (
        <>
            <h2 className='underline text-3xl sm:text-4xl uppercase mt-20'>News</h2>
            <section className='grid sm:grid-cols-2 gap-10 mt-20 mb-20'>
                {
                    newsData.map((item, i) => {
                        return <NewsCard heading={item.heading} date={item.date} tag={item.tag} />
                    })
                }
            </section>
        </>
    )
}

export default News