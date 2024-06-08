import { TextGenerateEffect } from '@/components/ui/TextGenerationEffect'
import React from 'react'

const support = () => {
  return (
    <div className="bg-[#5F2F90] min-h-screen">
      <TextGenerateEffect 
      className="text-white text-2xl font-semibold p-12"
      words={"Welcome to Void Strategies customer support! We're here to ensure your experience with our products and services is seamless and satisfying. If you have any questions, concerns, or feedback, please don't hesitate to reach out to us at support@voidstrategies.com. Our dedicated team is ready to assist you with any inquiries you may have. Your satisfaction is our top priority, and we're committed to providing timely and helpful support to address all your needs. Thank you for choosing Void Strategies"}
      />
    </div>
  )
}

export default support
