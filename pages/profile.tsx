import React from 'react'
import MobileNavbar from '@/components/MobileNavbar'
import Card from '@/components/Card'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from 'next/link';



const profile = () => {
  return (
    <>
        <MobileNavbar/>
        <Link href='/mobile'>
        <div className='p-1'><ArrowBackIosIcon/>Back</div>
        </Link>
    <Card/>
    
    </>
  )
}

export default profile;