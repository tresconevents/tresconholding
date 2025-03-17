'use client'

import React from 'react'
import MessageHeading from './MessageHeading'

const MessageFloderContainer = ({children}) => {
  return (
    <section className='md:max-w-[88rem] mx-auto px-4 md:px-13 lg:px-8 z-20 mt-[-20rem]'>
        <MessageHeading />
        {children}
    </section>
  )
}

export default MessageFloderContainer