import Image from 'next/image'
import { Inter } from 'next/font/google'

import MobileNavbar from '../components/MobileNavbar'
import Maps from '../components/Maps'

import Alert from '../components/Alert'
import Emergency from '../components/Emergency'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/charts.css/dist/charts.min.css"/>
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    </Head>

     <MobileNavbar/>
    <Maps/>
    
    <Emergency/>

    </>
  )
}
