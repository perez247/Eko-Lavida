import React from 'react'
import { motion } from "framer-motion";

const Sheffield = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className='w-full bg-secondary text-center py-4 lg:py-10 text-white'>
      <div className="w-full py-1 font-block text-5xl lg:text-7xl font-bold">
        <span className=' outliner  uppercase'><span className='block'>Sheffield</span>  Block Party</span>
      </div>

      <div className="w-full py-1">
        Sat. 23rd Sep. at 3:00pm - 10:00pm
      </div>

      <div className="w-full py-1">
        Emz Lounge, Sheffield
      </div>
    </motion.div>
  )
}

export default Sheffield
