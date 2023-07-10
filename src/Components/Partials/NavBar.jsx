import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';

import { AnimatePresence, motion, useCycle } from "framer-motion";
import classes from './NavBar.module.css';

const links = [
  { name: "Home", to: "/", id: 1, key: 'callToAction' },
  { name: "About", to: "/about", id: 2, key: 'aboutUs'},
  // { name: "Contact", to: "/contact", id: 3, key: 'contact' },
];

const itemVariants = {
  closed: {
      opacity: 0
  },
  open: {
      opacity: 1
  }
}

const NavBar = () => {
  const [open, cycleOpen] = useCycle(false, true);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <>
      {open && <div onClick={cycleOpen} className='fixed w-screen h-screen backdrop-blur-sm z-[20]'></div>}

      <nav className='fixed top-0 left-0 w-screen h-20 md:w-20 md:h-screen bg-secondary z-10'>
        <div className='flex px-2 md:px-0 md:h-full md:flex-col justify-between align-middle'>
          <img src='/img/logo.png' className='w-20' alt='logo' />
          <div className='flex align-middle'>
            <svg onClick={cycleOpen} className="w-10 h-10 text-white m-auto cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          <div className='hidden md:block'></div>
        </div>
      </nav>

      <div className={`fixed top-0 left-0 flex h-screen z-30`}>

        <AnimatePresence>
          {open && <motion.div
            className={`${classes.aside} bg-secondary text-center`}
            initial={{ width: 0 }}
            animate={{ width: windowWidth >= 768 ? '50%' : '100%', duration: 1 }}
            exit={{ width: 0, duration: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >

            <motion.svg 
                initial="closed"
                animate="open"
                exit="closed"
                variants={itemVariants}
                onClick={cycleOpen} className="w-10 h-10 cursor-pointer inline-block mx-9 mt-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </motion.svg>

            {links.map((l) => (
              <motion.a
                initial="closed"
                animate="open"
                exit="closed"
                key={l.id}
                variants={itemVariants}
              >
                <Link to={l.to} onClick={cycleOpen} > {l.name} </Link>
              </motion.a>
            ))}
          </motion.div>}
        </AnimatePresence>

      </div>
    </>
  )
}

export default NavBar
