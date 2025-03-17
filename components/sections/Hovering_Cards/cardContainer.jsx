import React from 'react'

const CardContainer = ({children}) => {
  return (
    <section className=' z-20 pb-[5rem] lg:pb-[0] lg:mt-[-110px] lg:mb-[-70px] relative'>
    <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
 {children}
    </div>
  </section>
  )
}

export default CardContainer