import React from 'react'
import Hero from './Hero'
import Work from '../components/Work'
import News from '../components/News'

const Index = () => {
    return (
        <div className='p-5 sm:p-10'>
            <Hero />
            <Work />
            <News />
        </div>
    )
}

export default Index