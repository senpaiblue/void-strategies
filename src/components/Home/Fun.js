import Image from 'next/image'
import React from 'react'
import You from '../../../public/assets/Home/You.jpg'

const Fun = () => {
  return (
    <div className='bg-white hidden md:flex'>
      <div className='flex-col'>
        <div className='bg-[#5F2F90] text-[#5F2F90] relative z-2 top-0 left-0 lg:max-w-[40%]'>
         dasds
        </div>
        <div className='bg-[#ff8513] montserrat text-center font-bold md:p-12 p-8 text-white text-[72px] lg:text-[72px] lg:max-w-[40%]'>
          FUN <br/>
          FACT
        </div>
       <Image
       src={You}
       alt='you'
       className='w-full'
       />
      </div>
    </div>
  )
}

export default Fun
