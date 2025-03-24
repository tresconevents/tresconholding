import React from 'react'
import MessageImageComponent from './messageImageComponent'
import MessageContentComponent from './messageContentComponent'
import Image from 'next/image'

const index = () => {
  return (
    <section className='max-w-[88rem] mx-auto mr-0 flex items-center justify-center lg:items-end lg:justify-end lg:mt-[-29rem] mt-0 z-[20] relative'>
      <div className='relative grid grid-cols-1 lg:grid-cols-2 h-full z-[10] w-full max-w-full lg:w-[95%] lg:max-w-[1640px]'>
        <div className="absolute top-[0px] left-0 right-0 px-4 z-30 mt-5">
          <h2 className='text-white text-[16px] font-manrope font-[400] pb-4 border-b border-[#00A5A366]'>
            Message from Chairman
          </h2>
        </div>
        <MessageImageComponent />
        <div className='bg-gradient-to-br from-[#01373D] to-[#015153] h-full'>
          <MessageContentComponent />
        </div>
        
        {/* Mohammad Saleem text - only for desktop */}
        <div className='absolute left-1/2 bottom-0 -translate-x-1/2 -translate-y-1/2 z-[100] text-left hidden lg:block'>
          <h3 className="text-white font-[500] text-[40px] lg:text-[66px] font-anek leading-[44px] lg:leading-[65px] drop-shadow-xl">
            Mohammed<br/>Saleem
          </h3>
        </div>
      </div>
    </section>
  )
}

export default index