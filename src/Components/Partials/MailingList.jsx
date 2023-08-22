import React from 'react'
import ShadowName from './ShadowName';
import { Input, Button } from "@material-tailwind/react";


import { motion } from "framer-motion";
import MailchimpFormContainer from './MailchimpFormContainer';

const MailingList = () => {
  return (
    <div className=' w-full bg-white py-20 relative overflow-hidden flex justify-center items-center'>

        <div className='w-full flex justify-start absolute left-80 -top-[196vh]'
         style={{ transform: 'rotate(-60deg)', transformOrigin: 'center center'  }}
        >
            <div className='h-[350vh] w-20 bg-secondary'></div>
            <div className='h-[350vh] w-20 bg-primary'></div>
            <div className='h-[350vh] w-20 bg-tetiary'></div>
        </div>

        <div className='container m-auto my-20 pt-10 bg-primary relative'>
            <div className='absolute text-center -top-24 pt-10 md:pt-0' >
                <ShadowName name="Mailing list" className={`text-5xl md:text-6xl lg:text-7xl`} />
            </div>

            <div className='w-full text-center py-20' >

                <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className=' text-3xl font-semibold w-[80%] md:w-[30vw] m-auto text-tetiary'>Subscribe to our mailing list and get notified on upcoming events</motion.p>

                <div className='w-full h-full flex justify-center items-center'>
                    <div className="w-full">
                        
                        <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                         className='w-[80%] md:w-[40vw] m-auto pt-4'>
                            <MailchimpFormContainer/>
                        </motion.div>

                        <hr  className='bg-white border-1 border-white my-20'/>

                        <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className='w-[80%] md:w-[40vw] m-auto text-2xl text-tetiary'>

                            

                            <p>
                                info@ekolavida.com <br />
                            </p>

                            <p className='flex gap-4 justify-center mt-4 '>
                                <a href="https://www.instagram.com/ekolavida_uk/?igshid=MmJiY2I4NDBkZg%3D%3D" target="_blank" rel="noopener noreferrer">
                                    <img src="/img/instagram.svg" className='w-10 h-10' alt="instagram" />
                                </a>
                                <a href="https://www.tiktok.com/@ekolavida_uk" target="_blank" rel="noopener noreferrer">
                                    <img src="/img/tiktok.svg" className='w-10 h-10' alt="instagram" />
                                </a>
                                {/* <img src="/img/tiktok.svg" className='w-10 h-10' alt="tiktok" /> */}
                            </p>

                            {/* https://www.tiktok.com/@ekolavida_uk */}

                        </motion.div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default MailingList
