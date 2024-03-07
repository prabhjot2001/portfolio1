import React from 'react'
import { Link } from 'react-router-dom'



const Card = ({ title, desc, img, link }) => {
    return (
        <>
            <div className='flex gap-4 flex-col justify-evenly p-2 sm:pl-10 border-2 border-black text-[#222222] h-[400px] sm:h-[450px] w-[300px] sm:w-[550px] relative'>
                <div class="relative bg-black h-full w-full overflow-hidden bg-cover bg-no-repeat">
                    <img
                        src={img}
                        class="object-cover filter grayscale h-full w-full transition duration-300 ease-in-out hover:scale-110"
                        alt="Image" />
                </div>

                <div className='flex flex-col gap-4 items-center justify-center  sm:flex sm:flex-row sm:justify-between'>
                    <h2 className='uppercase font-semibold text-xl'>{title}</h2>
                    <Link className='uppercase px-2 py-1 sm:px-4 sm:py-2 rounded-full border-2 border-black font-semibold' to={link} target='_blank'>Visit Github</Link>
                </div>
            </div>
        </>
    )
}

export default Card