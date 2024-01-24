import Giants from '@/components/About/Giants'
import Hero from '@/components/About/Hero'
import Last from '@/components/About/Last'
import Story from '@/components/About/Story'
import Footer from '@/components/Footer'
import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <Hero/>
      <Story />
      <Giants />
      <Last/>
      <Footer/>
    </div>
  )
}

export default AboutUs
