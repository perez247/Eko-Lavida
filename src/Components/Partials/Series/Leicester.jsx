import React from 'react'
import { motion } from "framer-motion";
const Leicester = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className='w-full bg-primary text-center py-4 lg:py-10 text-tetiary'>
      <div className="w-full py-1 font-block text-5xl lg:text-7xl font-bold">
        <span className=' outliner  uppercase'><span className='block'>Leicester</span>  Block Party</span>
      </div>

      <div className="w-full py-1">
        Sun 17th Sept at 3:00pm - 10:00pm
      </div>

      <div className="w-full py-1">
        Ole Moses's Cabin, Lericester
      </div>
    </motion.div>
  )
}

export default Leicester
