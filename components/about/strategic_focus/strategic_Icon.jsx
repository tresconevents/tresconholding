import React from 'react'
import { card_contain, Strategic } from './strategic'
import Image from 'next/image'

const Strategic_Icon = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2  absolute bottom-[24px] left-[2rem]">
            {Strategic?.features?.map((item, index) => (
              <div
                key={index}
                className="bg-[#00A5A3] relative   w-[200px] h-[150px] md:w-[273px] md:h-[150px]  px-[0.9rem] py-[1.63rem]"
              >
                <p className="text-[18px] text-[#fff] font-[400] font-anek-devanagari leading-[1.3rem]">
                  {item.heading}
                </p>
                <div className="absolute bottom-[24px] right-[26px] w-[2rem] h-[2rem] px-[26px] py-[24px]">
                  <Image src={item.icon} alt={item.heading} fill />
                </div>
              </div>
            ))}
          </div>
  )
}

export default Strategic_Icon