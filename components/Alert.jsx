import React from 'react'
import Button from '@mui/material/Button';

export default function Alert() {
  return (
    <div id='intensity' className='pt-50 w-full lg:h-screen p-2'>
    <div className='max-w-[1240px] mx-auto flex-col justfy-center h-full'>
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-3 gap-4 justify-center items-center'>
    <Button variant="contained" className='bg-green-600 shadow-xl grid grid-cols-2 gap-4 justify-center items-center '>Low</Button>
    <Button variant="contained" className=' bg-yellow-800 shadow-xl grid grid-cols-2 gap-4 justify-center items-center'>Medium</Button>
    <Button variant="contained" className=' bg-red-500 shadow-xl grid grid-cols-2 gap-4 justify-center items-center'>High</Button>
    </div>
    
    </div>

        </div>
        </div>
  )
}
