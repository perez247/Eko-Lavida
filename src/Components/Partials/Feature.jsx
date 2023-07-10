import React from 'react'
import {
    Avatar,  
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";


  import { motion, useScroll, useTransform } from 'framer-motion'

const Feature = props => {

    const img = props.url ? props.url : "/img/blank_profile.png"
  return (
    <motion.div 
    initial={{ scale: 0, opacity: 0}}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className='p-4 w-full text-center pb-10'>

  <Card
      shadow={false}
      className="relative grid h-[20rem] w-full max-w-[18rem] items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        style={{ background: `url('${img}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        className={`absolute inset-0 m-0 h-full w-full rounded-none bg-contain bg-center`}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6">
        <p className="mb-4 text-xl text-gray-400">
        {props.name}
        </p>
      </CardBody>
    </Card> 

    </motion.div>
  )
}

export default Feature
