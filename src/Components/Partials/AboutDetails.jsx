import React from 'react'
import ShadowName from './ShadowName'

import { motion } from "framer-motion";

const AboutDetails = () => {
  return (
<div className=' w-full h-full min-h-[100vh] bg-white py-20 relative overflow-hidden flex justify-center items-center'>

<div className='w-full flex justify-start absolute left-80 -top-[196vh]'
 style={{ transform: 'rotate(-60deg)', transformOrigin: 'center center'  }}
>
    <div className='h-[350vh] w-20 bg-secondary'></div>
    <div className='h-[350vh] w-20 bg-primary'></div>
    <div className='h-[350vh] w-20 bg-tetiary'></div>
</div>

<div className='container m-auto my-20 py-10 bg-primary relative'>
    <div className='text-center' >
        <ShadowName name="Who we are" />
    </div>

    <div className='w-full text-center py-20 text-tetiary' >

        <div className='w-full h-full flex justify-center items-center'>
            <div className="w-full">
                

                <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
                className='w-[80%] md:w-[40vw] m-auto text-xl'>

                    <p className=''>
                    The ultimate Afro-centric event experience in the UK! We’re commited to creating an environment that allows our customers meet new friends, savor Afro-Caribbean flavors, groove to great Afrobeats, Amapiano and Dancehall tunes in the diaspora.
                    </p>

                </motion.div>
            </div>
        </div>
    </div>
</div>

</div>
  )
}

export default AboutDetails
