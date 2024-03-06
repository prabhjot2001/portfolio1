import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className='text-[#222222] p-5 font-semibold border-t-2 mt-20 border-black mx-5 '>
      <div className='sm:flex sm:flex-row flex-col gap-20 items-center'>

        <div className='flex flex-col flex-[1.2rem] gap-10'>
          <div className='flex flex-col gap-5 w-full'>
            <h2 id='hire' className='scroll-mt[132px] text-5xl sm:text-6xl'>LET'S TALK ABOUT THE NEXT BIG THING.</h2>
            {/* <div className='text-3xl border-2 border-black w-full p-4 flex justify-center'>Hire me</div> */}

            <p className="relative flex bg-green-40 items-center group h-full hover:text-gray-100 transition-all duration-300 ease-in-out cursor-pointer">
              <a href="mailto:prabhjot1671@gmail.com" className='text-3xl border-2 border-black w-full p-4 flex justify-center'>Hire me</a>
              <span className="absolute left-0 bottom-0 w-full h-[0.1px] bg-black -z-10 group-hover:h-full group-hover:transition-all ease-in-out group-hover:duration-300 duration-300"></span>
            </p>
          </div>

          <div className='gap-10'>
            <p className='text-6xl'>2024</p>
            <p className='fontlight '>MADE BY PRABHJOT WITH LOVE <span className='text-red-500 text-xl'>❤</span></p>
          </div>
        </div>

        <div className='flex-[1rem] mt-20'>
          <div className='grid grid-cols-2 gap-10'>
            <Link to='https://www.linkedin.com/in/prabhjot-singh001/' target='_blank' className='font-semibold text-xl '>LINKEDIN</Link>
            <Link to='https://github.com/prabhjot2001' target='_blank' className='font-semibold text-xl '>GITHUB</Link>
            <Link to='/' className='font-semibold text-xl'>INDEED</Link>
            <Link to='/' className='font-semibold text-xl'>INSTAGRAM</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer