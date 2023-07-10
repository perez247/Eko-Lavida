import React from 'react'
import PageTransition from '../Components/Animations/PageTransition'
import AboutDetails from '../Components/Partials/AboutDetails'


import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <PageTransition />

      <motion.div
        className='w-full'
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <AboutDetails />
      </motion.div>
    </>
  )
}

export default About
