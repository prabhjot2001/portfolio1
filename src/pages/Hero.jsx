import { React, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import img from '../../public/hero.jpg'


const Hero = () => {

  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, color: '#222222' });
    } else {
      controls.start({ opacity: 0, y: 20, color: '#222222' });
    }
  }, [controls, inView]);


  return (
    <div id='home' className='scroll-mt-[132px] flex flex-col-reverse md:flex-row gap-[3rem] sm:gap-[7rem]'>


      <div className='flex-[1.5]'>
        <div className='flex flex-col gap-[1rem] sm:gap-[2.5rem]'>

          <h1 className='text-5xl sm:text-8xl'>HEY, I'M PRABHJOT</h1>
          <motion.p
            ref={ref}
            initial={{ opacity: 0, color: '#666666' }}
            animate={controls}
            transition={{ duration: 0.8 }}
            className='scroll-mt-[132px] uppercase text-gray-700 mt-8 sm:mt-20 sm:leading-[3rem] text-2xl sm:text-3xl font-bold'
            id='about'
          >
            I am a student & a full-stack developer I have built lots of projects you can explore more below. I enjoy building sites & apps. I work with latest technologies like MERN stack, Laravel etc.
          </motion.p>
        </div>

        <Skills />
        <Experience />
      </div>
      {/* --------------------------------------------------------------------------------------------------------------------------- */}

      <div className='flex-[1] relative'>
        <div className='sticky top-[180px]'>
          <img src={img} width={450} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero