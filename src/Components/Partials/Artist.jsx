import React, { useRef } from 'react'
import ShadowName from './ShadowName'
import Feature from './Feature'
import { motion, useScroll, useTransform } from 'framer-motion'

const artists = [
    {
        url: '/img/dkizz.jpeg',
        name: 'DKizz'
    },
    {
        url: '/img/pollo.jpeg',
        name: 'MC Marcopollo'
    },
    {
        url: '/img/muwa.jpeg',
        name: 'DJ Muwa'
    },
    {
        url: '/img/wolf.jpeg',
        name: 'DJ Alhaji Wolf'
    },
    {
        url: '/img/holy.jpeg',
        name: 'DJ Holy'
    }
]

const Artist = () => {

    const devRef = useRef();

    const { scrollYProgress, scrollY } = useScroll();
  
    const lavidaNamePosition = useTransform(
      scrollYProgress,
      [0, 0.5, 0.7, 0.9],
      [0, -20, -40, -50]
    );


  return (
    <div ref={devRef} className='w-full relative py-20 overflow-hidden'>

        <div className='container m-auto bg-secondary relative'>
            <div className=' absolute text-center -top-20' >
                <ShadowName name="FEATURING" />
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 py-20 md:px-10 gap-10'>
                { artists.map((a, i) => <Feature key={i} url={a.url} name={a.name} /> )}
            </div>
        </div>

        <div className='flex justify-end items-baseline absolute left-80 -bottom-[150vh] -z-10'
            style={{ transform: 'rotate(60deg)', transformOrigin: 'center center'  }}
        >
            <div className='h-[350vh] w-20 bg-secondary border border-white'></div>
            <div className='h-[350vh] w-20 bg-primary'></div>
            <div className='h-[350vh] w-20 bg-tetiary'></div>
        </div>
    </div>
  )
}

export default Artist
