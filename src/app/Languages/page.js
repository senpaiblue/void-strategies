import Footer from '@/components/Footer'
import Business from '@/components/Languages/Business'
import Cultures from '@/components/Languages/Cultures'
import Heart from '@/components/Languages/Heart'
import Hero from '@/components/Languages/Hero'
import Talk from '@/components/Languages/Talk'
import React from 'react'

const page = () => {
  return (
    <div className='montserrat'>
      <Hero />
      <Heart />
      <Cultures />
      <Business />
      <Talk />
      <Footer />
    </div>
  )
}

export default page
