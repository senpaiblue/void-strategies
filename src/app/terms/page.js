import React from 'react'
import { Terms } from '../../../constants/data'
import { TextGenerateEffect } from '@/components/ui/TextGenerationEffect'

const terms = () => {
  return (
    <div className="bg-[#5F2F90] min-h-screen">
      {Terms.map((item) => (
        <div className="w-full  lg:px-12 px-4 md:px-8 py-4"
        key={item.heading}
        >
          <TextGenerateEffect
            className="text-[#ff8513] text-3xl pb-4 font-bold"
            words={item.heading}
          />

          <TextGenerateEffect
            className="text-white/[0.7] font-regular text-lg "
            words={item.description}
          />
        </div>
      ))}
    </div>
  )
}

export default terms
