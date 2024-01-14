import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '@/components/Home/Hero'
import LaunchPad from '@/components/Home/LaunchPad'
import Factors from '@/components/Home/Factors'
import Longer from '@/components/Home/Longer'


export default function Home() {
  return (<div>
    <Hero />
    <LaunchPad />
    <Factors />
    <Longer />
  </div>
  )
}
