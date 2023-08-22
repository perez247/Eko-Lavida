import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'

const AppHeader = () => {

  const devRef = useRef();

  const { scrollYProgress } = useScroll({
    target: devRef,
    offset: ['start start', 'end start'],
  });

  const parralexText = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -4000]
  );

  return (
    <div ref={devRef} className='h-[100vh] min-h-[40rem] my-20 relative overflow-hidden'>

      <motion.div     
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className='w-[80vw] lg:w-[25vw] absolute top-0 right-4 bg-white'>
        <p className='border-l-8 text-xl border-tetiary pl-8 lg:text-3xl'> <span className='font-block text-tetiary text-4xl font-bold lg:text-6xl'>FREE!!</span> cocktails for the first 30 people</p>
      </motion.div>

      <div className='absolute w-full h-full flex justify-center items-center -z-10'>
        <motion.div 
          initial={{ scale: 0, }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className=' absolute h-[60vh] w-[60vh] md:h-[80vh] md:w-[80vh] lg:h-[100vh] lg:w-[100vh] bg-tetiary rounded-full flex justify-center items-center'>
            <motion.div 
              initial={{scale: 0, }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className=' h-[40vh] w-[40vh] md:h-[60vh] md:w-[60vh] lg:h-[80vh] lg:w-[80vh] bg-secondary rounded-full m-auto -bottom-10 flex justify-center items-center -z-0'>
              <motion.div 
                initial={{scale: 0, }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className=' h-[20vh] w-[20vh] md:h-[40vh] md:w-[40vh] lg:h-[60vh] lg:w-[60vh] bg-primary rounded-full m-auto -bottom-10 -z-0'></motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className='absolute w-full h-full flex justify-center items-center -z-10'>
        
        <motion.div 
          style={{ left: parralexText }} 
          className='absolute w-full text-center whitespace-nowrap -z-10'>
          <motion.p className=' text-[10em] md:text-[20em] lg:text-[30em] customShadow'>Join the fun!</motion.p>
        </motion.div>
      </div>

      <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className='w-[80vw] lg:w-[30vw]  absolute bottom-0 left-4 bg-white'>
        <p className='border-r-8 text-xl border-tetiary pl-8 text-center'>
          <span className='block font-block font-bold text-2xl py-2 lg:text-4xl text-tetiary'>GAMES</span>
          <span className='block font-block font-bold text-2xl py-2 lg:text-4xl text-white bg-tetiary'>AFRO VARIBBEAN FOOD</span>
          <span className='block font-block font-bold text-2xl py-2 lg:text-4xl text-secondary'>AMAZING PRIZES</span>
        </p>
      </motion.div>

    </div>
  )
}

export default AppHeader
