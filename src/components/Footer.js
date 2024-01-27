import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Insta from "../../public/assets/Insta.svg"
import linkedin from "../../public/assets/Linkedin.svg"

const Footer = () => {
  return (
    <div className='md:flex hidden mt-12'>
    <div className='bg-[#5F2F90] p-12 text-3xl font-bold text-white w-[70%]'>
    © 2024 voidstrategies. All rights reserved.
    </div>
    <div className='w-[30%] px-32 py-12 bg-[#ff8513]'> 
    <div className='flex flex-row gap-0'>
    <Link
    href={'https://www.instagram.com/voidstrategies/'}
    target='_blank'
    className='w-full'
    >
    <Image
    src={Insta}
    alt='InstaIcom'
    />
    </Link>
    <Link
    href={'https://www.linkedin.com/company/voidstrategies'}
    target='_blank'
    className='w-full'
    >
    <Image
    src={linkedin}
    alt='InstaIcom'
    />
    </Link>
    </div>
    </div>
    </div>
  )
}

export default Footer
