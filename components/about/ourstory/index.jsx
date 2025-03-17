import React from 'react'
import Heading from './heading'
import OurstoryContent from './ourstory-content'
import OurStoryRight from './right_side_component'

const Ourstory = () => {
  return (
      <section className="relative bg-white py-24 ">
         <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 z-20">
         <Heading />
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <OurstoryContent />
            <OurStoryRight />
           </div>
         </div>
       </section>
  )
}

export default Ourstory