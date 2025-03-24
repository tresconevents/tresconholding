import React from 'react';
import Image from 'next/image';

const MessageImageComponent = () => {
  return (
    <div className='bg-gradient-to-tr to-[#1E2124] from-[#464D53] h-full flex items-end justify-end relative overflow-visible'>
      <div className='relative w-full'>
        <Image
          src="/saleemMessage.png"
          alt="Saleem"
          layout="responsive"
          width={962}
          height={642}  
          objectFit="cover"
        />
      </div>
      
      {/* Founder & Chairman title */}
      <div className='absolute lg:left-[2.8rem] lg:bottom-[5rem] bottom-[-61px] left-[1rem] z-50'>
        <p className='text-white text-[16px] font-manrope'>Founder & <br/> Chairman, <br /> Trescon Holdings</p>
        
        {/* Mohammed Saleem name for mobile and md screens */}
        <h3 className="text-white font-[500] text-[40px] lg:hidden font-anek leading-tight mt-3">
          Mohammed<br/>Saleem
        </h3>
      </div>
    </div>
  );
};

export default MessageImageComponent;
