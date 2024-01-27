import ContactInfo from '@/components/Contact/ContactInfo'
import Hero from '@/components/Contact/Hero'
import Para from '@/components/Contact/Para'
import WhatsApp from '@/components/Contact/WhatsApp'
import React from 'react'

const ContactUs = () => {
  return (
    <div>
      <Hero/>
      <Para/>
      <ContactInfo />
      <WhatsApp/>
    </div>
  )
}

export default ContactUs
