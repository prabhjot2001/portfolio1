import React from 'react'
import { Link } from 'react-router-dom'
import { cardData } from '../data/data'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Card from './Card';



const Work = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);
  return (
    <>
      <h2 id='portfolio' className='scroll-mt-[132px] underline text-3xl sm:text-4xl uppercase mt-20'>MY WORK</h2>

      <section ref={targetRef} className="relative h-[300vh] mt-20 ">
        <div className="sticky top-[132px] flex h-[500px] items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-20">
            {cardData.map((card, i) => {
              return <Card title={card.title} desc={card.description} img={card.img} link={card.link} key={i} />;
            })}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Work