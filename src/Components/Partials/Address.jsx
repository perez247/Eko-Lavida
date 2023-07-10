import React from 'react';
import { motion } from "framer-motion";

const Address = () => {
  return (
      <div
        className='w-full bg-tetiary overflow-hidden'>
        <div className='m-auto'>
            <div className='w-full'>
                <div className=" grid grid-cols-1 md:grid-cols-2 w-full">
                    <div className=' min-h-[20rem]' style={{ background: `url('/img/party_1.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
                    <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="w-full md:w-[70%] min-h-[20rem] m-auto flex justify-center items-center">
                        <div className='w-full'>
                            <p className=' text-2xl lg:text-3xl text-white text-center'>
                            The Birmingham Block Party Sector 57 <br /> 21 Milk Street, Deritend <br />
                            July 15, 2023 - 3PM.</p>
                        </div>
                    </motion.div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                    <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="w-full h-full  min-h-[20rem] flex justify-center items-center md:w-[70%] m-auto">
                        <p className=' text-2xl lg:text-3xl text-white text-center'>AN INCLUSIVE AFROCENTRIC EVENT FOR "OUTSIDERS”.</p>
                    </motion.div>
                    <div className=' min-h-[20rem]' style={{ background: `url('/img/party_4.webp')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Address
