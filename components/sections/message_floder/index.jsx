"use client"

import React from 'react'
import MessageFloderContainer from './messageFloderContainer'
import MessageImage from './messageImage'
import MessageContent from './MessageContent'

const MessageSection = () => {
  return (
     <MessageFloderContainer>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[0]">
        <MessageImage />
        <MessageContent />
        </div>  
     </MessageFloderContainer>
  )
}

export default MessageSection