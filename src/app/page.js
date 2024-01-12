import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '@/components/Home/Hero'
import LaunchPad from '@/components/Home/LaunchPad'


export default function Home() {
  return (<div>
    <Hero />
    <LaunchPad />
  </div>
  )
}
