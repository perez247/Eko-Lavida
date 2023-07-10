import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

const PageTransition = () => {
  return (
    <>
      <AnimatePresence mode='wait'>
        <motion.div 
          initial={{ x: '0%', width: '0%' }}
          animate={{ x: ['0%', '100%', '0%'], width: ['0%', '100%', '0%'] }}
          transition={{ duration: 1.6, }}
          className='fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-primary'/>
      </AnimatePresence>

      <motion.div 
        initial={{ x: '0&', width: '0%' }}
        animate={{ x: ['0%', '100%', '0%'], width: ['0%', '100%', '0%'] }}
        transition={{ duration: 1.6, delay: 0.2 }}
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-secondary'/>

      <motion.div 
        initial={{ x: '0%', width: '0%' }}
        animate={{ x: ['0%', '100%', '0%'], width: ['0%', '100%', '0%'] }}
        transition={{ duration: 1.6, delay: 0.4 }}
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-tetiary'/>
    </>
  )
}

export default PageTransition
