import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '@/components/Home/Hero'
import LaunchPad from '@/components/Home/LaunchPad'
import Factors from '@/components/Home/Factors'


export default function Home() {
  return (<div>
    <Hero />
    <LaunchPad />
    <Factors />
  </div>
  )
}
