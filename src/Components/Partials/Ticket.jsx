import { Button } from '@material-tailwind/react'
import React, { useState } from 'react'
import { useCountdown } from '../Hooks/useCountdown';

const Ticket = () => {

    // const d = new Date("July 15, 2023 00:00:00");

    // const [days, hours, minutes, seconds] = useCountdown(d);

    // const [hasExpired, setHasExpired] = useState(false);

    // if (days + hours + minutes + seconds <= 0) {
    //     setHasExpired(true);
    //  }

  return (
    <>
        <div className='flex justify-center items-baseline gap-6 flex-wrap text-white'>
            {/* <p className=' text-7xl pt-10 relative'>
                <span className='pr-6'>{hasExpired ? 0 : days}</span> <span className='bg-tetiary p-1 text-sm absolute bottom-3 right-0'>Days</span>
            </p>
            <div className='text-3xl flex'>
                <p>{hasExpired ? 0 : hours} <span className='p-2 text-lg -ml-7 text-tetiary'>:H</span></p>
                <p>{hasExpired ? 0 : minutes} <span className='p-2 text-lg -ml-7 text-tetiary'>:M</span></p>
                <p>{hasExpired ? 0 : seconds} <span className='p-2 text-lg -ml-7 text-tetiary'>:S</span></p>
            </div> */}
            <p className=' text-7xl pt-10 relative'>
                <span className='pr-6'>0</span> <span className='bg-tetiary p-1 text-sm absolute bottom-3 right-0'>Days</span>
            </p>
            <div className='text-3xl flex'>
                <p>0 <span className='p-2 text-lg -ml-7 text-tetiary'>:H</span></p>
                <p>0 <span className='p-2 text-lg -ml-7 text-tetiary'>:M</span></p>
                <p>0 <span className='p-2 text-lg -ml-7 text-tetiary'>:S</span></p>
            </div>
        </div>
        <p className='w-70 m-auto py-10 text-white text-2xl text-center'>
            <p className='mb-4'>We are Eko Lavida. <br /> We make a vibe.</p>
            {/*  */}
            <a href="https://fatsoma.com/ekolavida" target="_blank" rel="noopener noreferrer" className='block m-auto'>
                <Button size='lg' className='bg-tetiary' color='green'>Buy Tickets</Button>
            </a>
        </p>
    </>
  )
}

export default Ticket
