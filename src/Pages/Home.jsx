import React from 'react'
import PageTransition from '../Components/Animations/PageTransition'

import AppHeader from '../Components/Partials/Header';
import Address from '../Components/Partials/Address';
import Lavida from '../Components/Partials/Lavida';


import { motion } from "framer-motion";
import Artist from '../Components/Partials/Artist';
import MailingList from '../Components/Partials/MailingList';

const Home = () => {
  return (
  <>
    <PageTransition />
    <motion.div
      className='w-full'
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.6 }}
    > 
      <Lavida />
      <AppHeader />  
      <Address />
      <Artist />
      <MailingList />
    </motion.div>
  </>
  )
}

export default Home
