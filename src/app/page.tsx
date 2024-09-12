import React from 'react'
import Navbar from './navbar/page'
import BecomeBatter from '@/app/becomeBatter/page'
import Footer from '@/app/footer/page'
import Inspiration from '@/app/inspiration/page'

const page = () => {
  return (
    <div>
      <Navbar/>
      <BecomeBatter/>
      <Inspiration/>
      <Footer/>
    </div>
  )
}

export default page
