import React from 'react'
import NavBar from './NavBar'

import { Outlet } from 'react-router-dom';
import classes from './RootLayout.module.css';

const RootLayout = () => {
  return (
    <div className=' font-body'>
        <main className={`relative w-full ${classes.container}`}>
            <NavBar/>
            <div className='pt-20 md:pl-20 md:pt-0 w-full'>
                <Outlet/>
            </div>
        </main>
    </div>
  )
}

export default RootLayout
