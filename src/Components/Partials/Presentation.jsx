import { Button } from '@material-tailwind/react'
import React from 'react'

const Presentation = () => {
  return (
    <>
        <div className='w-full text-white py-8 lg:pt-10 lg:mt-20'>

            {/* <div className='w-full text-center text-3xl'>
                Presents the
            </div> */}

            <div className='w-full text-center p-3 lg:px-16 uppercase font-block'>
                <span className="block text-5xl lg:text-7xl">Block</span>
                <span className="block text-5xl lg:text-7xl -mt-4">party</span>
                <span className='text-2xl lg:text-4xl'>summer last dance</span>
            </div>

            <p className='m-auto text-white text-center'>
                  <Button size='sm' className='bg-tetiary' color='green'>
                    <a href="https://www.fatsoma.com/ekolavida" target="_blank" rel="noopener noreferrer" className='block m-auto'>
                    Buy Tickets  
                    </a>
                  </Button>
            </p>
        </div>
    </>
  )
}

export default Presentation
