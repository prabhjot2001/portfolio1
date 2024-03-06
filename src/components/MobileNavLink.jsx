import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const MobileNavLink = ({ to, title, isOpen, setIsOpen, toggleMenu }) => {
    const linkAnimation = {
        initial: {
            y: "30vh",
            transition: {
                duration: 0.5,
                ease: [0.37, 0, 0.63, 1],
            },
        },
        open: {
            y: 0,
            transition: {
                ease: [0, 0.55, 0.45, 1],
                duration: 0.7,
            },
        },
    };
    return (
        <motion.div variants={linkAnimation} onClick={toggleMenu} >
            <Link to={to} className='font-bold'>
                {
                    title
                }
            </Link>
        </motion.div >

    )
}

export default MobileNavLink