import React, { useRef } from 'react';
import ShadowName from './ShadowName';


import { motion, useScroll, useTransform } from "framer-motion";
import Ticket from './Ticket';

const Lavida = () => {

  const devRef = useRef();

  const { scrollYProgress } = useScroll({
    target: devRef,
    offset: ['start start', 'end start'],
  });

  const lavidaNamePosition = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.9],
    [80, 100, 150, 300]
  );

  return (
    <motion.div 
    ref={devRef}
    style={{ background: `url('/img/party_5.jpg')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
      className='h-[100vh] py-[30vh] relative overflow-hidden'>

      <div className='w-full absolute top-10 -right-14 -rotate-6'>
        <div className="w-full flex items-end flex-col justify-center">
          
          <motion.div 
            initial={{ width: '0%' }}
            animate={{ width: '65%' }}
            transition={{ delay: 2, duration: 0.8 }}
            className='h-20 bg-tetiary '></motion.div>
          <motion.div 
            initial={{ width: '0%' }}
            animate={{ width: '80%' }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className='h-20 bg-secondary'></motion.div>
          <motion.div 
            initial={{ width: '0%' }}
            animate={{ width: '50%' }}
            transition={{ delay: 2.4, duration: 0.8 }}
            className='h-20 bg-primary'></motion.div>
        </div>
      </div>

      <div className='w-full h-[50vh] flex justify-center items-center'>
        <div className='w-full py-10 '>
            <div className='w-full relative text-center'>
              <motion.div 
                  initial={{ opacity: 0, x: -600 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.6, duration: 0.8 }}
                  className='bg-secondary'>
                  <Ticket />
              </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.8, duration: 0.8 }}
                  style={{ top: lavidaNamePosition }}
                  className='rotate-90 absolute left-1/2' >
                    <ShadowName name="EKO LAVIDA" />
                </motion.div>
            </div>
        </div>
        <div className=' w-1/3 lg:w-full relative bg-purple-400 flex justify-start items-center'></div>
        <div></div>
      </div>
    </motion.div>
  )
}

export default Lavida
